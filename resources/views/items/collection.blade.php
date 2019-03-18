<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Collection</title>
</head>

<body>
    <div>
        @foreach ($items as $item)
        <li>
            <a href="{{ $item->id }}">
                {{ $item->model }}
            </a>
        </li>
        @endforeach
    </div>
</body>

</html>
