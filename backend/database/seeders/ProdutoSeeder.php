<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProdutoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $produto = [
            'nome' => 'Smash da casa',
            'descricao' => '2x hambúrger 200g, queijo cheddar, tomate, alface, picles, cebola, molho da casa',
            'valor' => '30.50',
            'imagem' => 'hamburguer.png',
        ];

        for ($i=0; $i < 50; $i++) { 
            DB::table('produtos')->insert($produto);
        }

    }
}
