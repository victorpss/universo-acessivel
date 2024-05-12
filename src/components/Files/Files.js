import React from 'react';
import './Files.css';
import './Material/Material.js';
import Material from './Material/Material.js';
import Touch from '../.././assets/Touch-Icon.svg'
import Puzzle from '../.././assets/Puzzle-Icon.svg'
import Book from '../.././assets/Book-Icon.svg'
import Article from '../.././assets/Article-Icon.svg'

function Files(){
  return (
    <div className='files-wrapper'>
      <div className='files-title'>Materiais</div>
        <div className='files-container'>
          <Material 
              imgSrc={Touch} 
              alt={"Ícone representando um toque."}
              size={54}
              title={"Cardenos Táteis"}
              text={"São materiais 3D com figuras táteis como, por exemplo, a Lua tátil."}
              className="touch-icon" // classe personalizada para mexer na margem
              downloadLink="" // link do drive
          />
          <Material 
              imgSrc={Puzzle}
              alt={"Ícone de um quebra-cabeça."}
              size={40}
              title={"Jogos"}
              text={"São jogos didáticos com propósito do ensino da Astronomia."}
              downloadLink="" // link do drive
          />
          <Material 
              imgSrc={Book} 
              alt={"Ícone de um livro."}
              size={48}
              title={"Livros"}
              text={"Materiais para leitura sobre astronomia criados pelo nosso grupo."}
              className="book-icon" // classe personalizada para mexer na margem
              downloadLink="" // link do drive
          />
          <Material 
              imgSrc={Article} 
              alt={"Ícone de um artigo."}
              size={41}
              title={"Artigos"}
              text={"Artigos desenvolvidos pelo projeto. São capítulos de livros, resenhas, etc."}
              downloadLink="" // link do drive
          />
      </div>
    </div>
  );
};

export default Files;
