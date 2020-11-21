<?php


namespace App\Helpers;


class SlugHelper
{
    public static function nameToSlug($name){
        $name =  iconv('UTF-8', 'ASCII//TRANSLIT', $name);
        $name = strtolower($name);
        $name = str_replace(' ', '-', $name);
        return $name;
    }
}
