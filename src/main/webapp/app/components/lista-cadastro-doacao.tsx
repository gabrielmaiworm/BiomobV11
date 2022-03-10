import React, { useState, useEffect }  from 'react';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link, RouteComponentProps  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Alert, Button, Table } from 'reactstrap';

import {  TextFormat } from 'react-jhipster';

import { getEntities } from '../entities/cadastro-doacao/cadastro-doacao.reducer';
import { useAppDispatch, useAppSelector } from '../config/store';

export const ListaCadastroDoacao= ()  => {
    const dispatch = useAppDispatch();
    const cadastroDoacaoList = useAppSelector(state => state.cadastroUser.entities);

    useEffect(() => {
      dispatch(getEntities({}));
    }, []);

    return (
                <div>
                {cadastroDoacaoList.map((cadastroDoacao, i) => (
                  <div key={`entity-${i}`} data-cy="entityTable">
                    {/* <p>
                      {cadastroDoacao.dataDoacao ? (
                        <TextFormat type="date" value={cadastroDoacao.dataDoacao} format={APP_DATE_FORMAT} />
                      ) : null}
                    </p> */}

                 <p>Nome: {cadastroDoacao.nome}</p>
                 <p>Email contato: {cadastroDoacao.user ? cadastroDoacao.user.email : " "}</p>
                 <p>Cidade: {cadastroDoacao.cidade}</p>
                    {/* <p>Descrição item doado: {cadastroDoacao.acao ? cadastroDoacao.acao.solicitacao.descricao.descricao : ' '}</p> */}
                    {/* <p>Pais: {cadastroDoacao.acao.solicitacao.descricao.descricao}</p> */}
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>

                ))}

  </div>

          )
  }
