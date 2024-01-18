body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
}

.navbar {
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar a, .navbar button {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

.navbar img {
    max-height: 50px;
}

.card {
    background-color: #fff;
    border-radius: 10px;
    margin: 10px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.02);
}

.align {
    display: flex;
    align-items: center;
}

.form-check-input:checked + .form-check-label::before {
    background-color: #3498db; /* Change this to your desired color for the slider */
}

.btn-submit {
    background-color: #3498db;
    color: #fff;
    border: none;
}

.btn-submit:hover {
    background-color: #2077b6;
}
