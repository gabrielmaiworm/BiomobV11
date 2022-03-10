import React, { useState, useEffect }  from 'react';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link, RouteComponentProps  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Alert, Button, Table } from 'reactstrap';

import {  TextFormat } from 'react-jhipster';




import { getEntities } from '../entities/cadastro-user/cadastro-user.reducer';
import { useAppDispatch, useAppSelector } from '../config/store';

export const ListaCadastroUser= ()  => {
    const dispatch = useAppDispatch();
    const cadastroUserList = useAppSelector(state => state.cadastroUser.entities);

    useEffect(() => {
      dispatch(getEntities({}));
    }, []);

    return (
                <div>
                {cadastroUserList.map((cadastroUser, i) => (
                  <div key={`entity-${i}`} data-cy="entityTable">
                    {/* <p>
                      {cadastroDoacao.dataDoacao ? (
                        <TextFormat type="date" value={cadastroDoacao.dataDoacao} format={APP_DATE_FORMAT} />
                      ) : null}
                    </p> */}

                    <p>Nome: {cadastroUser.nome}</p>
                    <p>Tel contato: {cadastroUser.telefone}</p>
                    <p>Cidade: {cadastroUser.cidade}</p>
                    <p>Pais: {cadastroUser.pais}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>

                ))}

  </div>

          )
  }
