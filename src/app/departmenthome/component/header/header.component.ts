import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode'; // Ensure correct import path

interface JwtPayload {
  userName: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalcartItem: number = 0;
  public searchtext: string = '';
  public title: string = 'DEPARTMENT STORE';
  public isLoggedIn: boolean = false;
  public isGuestUser: boolean = false;
  public userName: string | undefined;

  private apiUrl = 'http://localhost:8080'; // Replace with actual backend URL

  constructor(
    private router: Router,
    private toast: ToastrService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.checkUserToken(); // Check user/guest token on initialization
    this.getCartItemCount(); // Fetch cart item count
  }

  // Check if a user or guest token is present and handle accordingly
  private checkUserToken(): void {
    const userToken = this.getCookie('user') || this.getCookie('authToken');

    // Log retrieved tokens for debugging
    console.log('User Token:', userToken);

    if (userToken) {
      const decodedToken: JwtPayload = jwtDecode(userToken);
      this.isLoggedIn = true;
      this.userName = decodedToken.userName;
      console.log('User logged in as:', this.userName);

      // Clear guest token and guest ID after login
      this.clearGuestToken();
    } else {
      // No user token found
      this.isGuestUser = false; // Ensure not a guest user if logged out
      console.log('No user token found, not logged in.');

      // Check for guest data only when not logged in
      const guestToken = this.getCookie('guestToken');
      const guestId = this.getCookie('guestId');

      console.log('Retrieved Guest Token:', guestToken);
      console.log('Retrieved Guest ID:', guestId);

      if (guestToken && guestId) {
        this.isGuestUser = true;
        this.userName = 'Guest';
        console.log('Guest logged in with ID:', guestId); // Log the guestId
      } else {
        // No tokens found, generate new guest token if desired
        console.log('No token found, generating guest token');
      }
    }
  }

  // Helper to clear the guest token when user logs in
  private clearGuestToken(): void {
    document.cookie = "guestToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = "guestId=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"; // Clear guestId
    console.log('Guest token and ID cleared on login');
  }

  // Handle search functionality
  onSearch(): void {
    if (this.searchtext.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchtext } });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'No search text',
        text: 'Please enter a search term!'
      });
    }
  }

  // Retrieve a cookie value by its name
  private getCookie(name: string): string | null {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(row => row.startsWith(`${name}=`));
    const cookieValue = cookie ? cookie.split('=')[1] : null;

    console.log(`Retrieved Cookie - Name: ${name}, Value: ${cookieValue}`);
    return cookieValue;
  }

  // Fetch the total cart item count
  private getCartItemCount(): void {
    // Implement logic to fetch cart item count from backend if needed
    this.totalcartItem = 0; // Placeholder, replace with actual logic
    console.log('Cart Item Count:', this.totalcartItem);
  }

  // Logout user by clearing all relevant tokens
  logout(): void {
    console.log('Before Logout Cookies:', document.cookie);

    // Clear all relevant tokens
    document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = "guestToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

    console.log('After Logout Cookies:', document.cookie);

    this.isLoggedIn = false;
    this.isGuestUser = false;
    this.userName = undefined;

    this.toast.success("Logged out successfully.");
    this.router.navigate(['/register/login']);
  }

}
