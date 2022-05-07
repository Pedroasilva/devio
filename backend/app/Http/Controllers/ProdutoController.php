<?php

namespace App\Http\Controllers;

use App\Models\Produto as Produto;
use App\Http\Resources\Produto as ProdutoResource;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produtos = Produto::paginate(12);
        return ProdutoResource::collection($produtos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $produto = new Produto;
        $produto->titulo = $request->input('nome');
        $produto->conteudo = $request->input('descricao');
        $produto->conteudo = $request->input('valor');
        $produto->conteudo = $request->input('imagem');

        if( $produto->save() ){
            return new ProdutoResource( $produto );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $produtos = Produto::findOrFail( $id );
        return new ProdutoResource( $produtos );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $produto = Produto::findOrFail( $request->id );
        $produto->titulo = $request->input('nome');
        $produto->conteudo = $request->input('descricao');
        $produto->conteudo = $request->input('valor');
        $produto->conteudo = $request->input('imagem');

        if( $produto->save() ){
            return new ProdutoResource( $produto );
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $produto = Produto::findOrFail( $id );
        if( $produto->delete() ){
        return new ProdutoResource( $produto );
        }
    }
}
