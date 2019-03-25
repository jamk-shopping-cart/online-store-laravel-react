<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Item</title>
</head>

<body>
    <div>
        <h1>{{ $item->model }}</h1>
        <h3>{{ $item->price }} <span> €</span></h3>
        <p>{{ $item->color }}</p>
        <p>{{ $item->material }}</p>
        <p>{{ $item->closure_method }}</p>
        <p>{{ $item->description}}</p>
    </div>
</body>

</html>
