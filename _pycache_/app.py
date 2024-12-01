{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
    display: flex;
    justify-content: center;
    padding: 20px;
}
.about-container {
    width: 100%;
    max-width: 800px;
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.about-container h1 {
    text-align: center;
    color: #4CAF50;
    margin-bottom: 20px;
}
section {
    margin-bottom: 20px;
}
section h2 {
    font-size: 1.5em;
    color: #4CAF50;
    margin-bottom: 10px;
}
section p {
    font-size: 1em;
    line-height: 1.6;
    color: #555;
}
.values ul {
    list-style-type: none;
    padding-left: 0;
}
.values li {
    margin-bottom: 10px;
    font-size: 1em;
    color: #333;
}
.values li strong {
    color: #4CAF50;
}
‎static/css/ac.css
+62
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,62 @@
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.account-container {
    width: 100%;
    max-width: 400px;
    padding: 30px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.account-container h1 {
    margin-bottom: 20px;
    color: #4CAF50;
}
.account-form label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
}
.account-form input, 
.account-form select, 
.account-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
.account-form button {
    width: 100%;
    padding: 12px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
}
.account-form button:hover {
    background-color: #45a049;
}
