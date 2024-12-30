# Menu Management System

A full-stack project using React and Spring Boot to manage a menu. The application allows users to view the menu and admins to add new items.

## Features

- **Frontend**: React
  - Display menu items
  - Admin panel to add new menu items
- **Backend**: Spring Boot
  - REST API for menu management
  - Integration with a database to store menu items

## Technologies Used

- React
- Axios (for HTTP requests)
- Spring Boot
- H2 Database (or any database of your choice)

## Setup and Installation

### Backend

1. Clone the repository and navigate to the backend folder.
2. Build the Spring Boot application using Maven or Gradle.
3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```
4. The backend will be available at `http://localhost:8080`.

### Frontend

1. Navigate to the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```
4. The frontend will be available at `http://localhost:3000`.

## API Endpoints

- **GET** `/api/menu` - Retrieve all menu items
- **POST** `/api/menu` - Add a new menu item
  - Request Body:
    ```json
    {
      "name": "Item Name",
      "price": 10.99
    }
    ```

## Screenshots

### Admin Panel
![Admin Panel](https://via.placeholder.com/800x400.png?text=Admin+Panel)

### Menu View
![Menu View](https://via.placeholder.com/800x400.png?text=Menu+View)

## Contributing

Feel free to contribute to this project by submitting a pull request. Make sure to follow the coding standards and include documentation for any new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or suggestions!
