<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $names = ['kamil', 'adam', 'przemek', 'angela', 'fifonż'];
        $surnames = ['grzegorz', 'żegota', 'marcin', 'barnaba', 'janek'];
        for ($i = 0; $i < 10; $i++){
            $name = $names[random_int(0,4)];
            $surname = $surnames[random_int(0,4)];
            DB::table('users')->insert([
                'name' => $name,
                'surname' => $surname,
                'email' => $name.$i."@".$surname.".pl",
                'password' => bcrypt('12345678'),
                'is_company' => $i % 2 == 0 ? 1 : 0
            ]);

            if($i % 2 == 0){
                $rand = substr(md5(microtime()),rand(0,26),5);
                DB::table('companies')->insert([
                    'company_nip' => 1111111111,
                    'company_name' => $rand,
                    'company_slug' => $rand,
                    'company_phone' => $rand,
                    'company_street' => $rand,
                    'company_street_number' => $rand,
                    'company_city' => $rand,
                    'company_postal' => $rand,
                    'company_description' => $rand,
                    'company_slogan' => $rand,
                    'category_id' => random_int(1,10),
                    'user_id' => $i + 1,
                    'created_at' => \Carbon\Carbon::now()->subDays(random_int(1,100))
                ]);

                for($j = 0; $j < random_int(1,3); $j++){
                    DB::table('company_contacts')->insert([
                       'name' => $rand.$j,
                       'contact' => $rand.$j,
                       'company_id' => ($i / 2) + 1
                    ]);
                }
            }
        }
    }
}
