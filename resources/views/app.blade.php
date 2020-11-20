<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name=”robots” content="index, follow">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <base href="{{ request()->getBasePath() }}/" />
    <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">

    <title>{{ empty(env('APP_NAME')) }}</title>

</head>
<body>
<div id="app"></div>

<script type="text/javascript">
    window.apiUrl = "{{ empty(env('API_URL')) ? config('app.url/').'api' : env('API_URL') }}";
    window.baseUrl = "{{ request()->getBasePath() }}";
    window.assetsUrl = "{{ asset('') }}"
</script>
<script type="text/javascript" src="{{ asset('assets/js/manifest.js?v=1') }}"></script>
<script type="text/javascript" src="{{ asset('assets/js/vendor.js?v=1') }}"></script>
<script type="text/javascript" src="{{ asset('assets/js/app.js?v=1') }}"></script>

</body>
</html>
