<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Mode Toggle</title>
    <style>
        body {
            transition: background-color 0.3s, color 0.3s;
        }
        .dark-mode {
            background-color: #121212;
            color: white;
        }
    </style>
</head>
<body>
    <button id="toggleDarkMode">Toggle Dark Mode</button>

    <script>
        function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
        }

        document.getElementById("toggleDarkMode").addEventListener("click", toggleDarkMode);
    </script>
</body>
</html>
