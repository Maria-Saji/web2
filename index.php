<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

    <!-- Video Background -->
    <video autoplay muted loop id="background-video">
        <source src="background.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <!-- Login Form -->
    <div class="form-container">
        <form action="login.php" method="post">
            <h2>LOGIN</h2>
            <?php if (isset($_GET['error'])) { ?>
                <p class="error"><?php echo $_GET['error']; ?></p>
            <?php } ?>
            
            <label>User Name</label>
            <input type="text" name="uname" placeholder="User Name" required><br>

            <label>Password</label>
            <input type="password" name="password" placeholder="Password" required><br>

            <button type="submit">Login</button>
            <p class="ca">Don't have an account? <a href="signup.php">Create an account</a></p>
        </form>
    </div>

</body>
</html>
