import React, { useState, useEffect }  from 'react';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link, RouteComponentProps  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Alert, Button, Table } from 'reactstrap';

import {  TextFormat } from 'react-jhipster';




import { getEntities } from '../entities/solicitacao/solicitacao.reducer';
import { useAppDispatch, useAppSelector } from '../config/store';

export const ListaSolicitacao= ()  => {
    const dispatch = useAppDispatch();
    const solicitacaoList = useAppSelector(state => state.solicitacao.entities);

    useEffect(() => {
      dispatch(getEntities({}));
    }, []);




    return (
                <div>
                {solicitacaoList.map((solicitacaoUser, i) => (
                  <div key={solicitacaoUser?.id} data-cy="entityTable">
                    {/* <p>
                      {solicitacaoDoacao.dataDoacao ? (
                        <TextFormat type="date" value={solicitacaoDoacao.dataDoacao} format={APP_DATE_FORMAT} />
                      ) : null}
                    </p> */}

                    <p>Solicitante: {solicitacaoUser.solicitante }</p>
                    <p>Pedido: {solicitacaoUser.descricao ? solicitacaoUser.descricao.descricao : ' '}</p>
                    <p>Data da solicitação: {solicitacaoUser.dataSolicitacao}</p>
                    <p>Endereço de entrega: {solicitacaoUser.enderecoEntrega}</p>
                    <p>Local de entrega: {solicitacaoUser.localDeEntrega}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>

                ))}

  </div>

          )
  }
