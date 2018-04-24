<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="keywords" content="get numbers, free numbers" />
  <meta name="description" content="get free numbers">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Мир на ладонях - онлайн-сервис для путешественников</title>
  <link rel="icon" href="{{ asset('public/globe.ico') }}">
  <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
</head>
<body>
<div id="app">
      <welcome></welcome>
</div>
<script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
</body>
</html>
