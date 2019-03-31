<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/all.min.css') }}" rel="stylesheet">
</head>

<body>
    <div class="container-fluid d-flex">
        <div class="row w-100 mx-auto">
            <div class="col-12 title align-self-end text-center font-light">
                <p class="animated fadeIn delay-0.5s">
                    @if (Route::has('login'))
                    <div class="top-right links">
                        @auth
                        <a href="{{ url('/home') }}">Online Store</a> @else
                        <a href="{{ route('login') }}">Login</a> @if (Route::has('register'))
                        <a href="{{ route('register') }}">Register</a> @endif @endauth
                    </div>
                    @endif
                </p>
            </div>
            <div class="col-12 subtitle align-self-center text-center font-bold animated fadeIn delay-1s">
                <p>View Our Collection 2018</p>
                <a href="/collection"><i class="fas fa fa-chevron-down"></i></a>
            </div>
        </div>
    </div>
</body>

</html>
