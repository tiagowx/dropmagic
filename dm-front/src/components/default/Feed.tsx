import React from 'react';
import { Box } from '@mui/system'

// import { Container } from './styles';

const Feed: React.FC = () => {
  return (
    <Box sx={{width:'640px'}}>
      <div className="container-fluid p-3 border pt-4">
        <div className="row p-3">
          <div className="col justify-content-center ">
            <h3>Serviço</h3>
            <ul className="col">
              <li>Email: email@email.com.br</li>
              <li>Fone: 99 9 9999-9999</li>
              <li>Descrição: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis atque voluptatem possimus necessitatibus autem quibusdam, reprehenderit porro, quis maxime quaerat quos </p></li>
            </ul>
            <button className="btn btn-primary offset-7">Solicitar Proposta</button>
          </div>
          <div className="col">
            <img className="img-thumbnail" src="img/vazio.png" alt="" />
            <span>Avaliar</span>
          </div>
        </div>
      </div>

    </Box>
  );
}

export default Feed;