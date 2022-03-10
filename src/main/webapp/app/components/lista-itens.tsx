import React, { useState, useEffect }  from 'react';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link, RouteComponentProps  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Alert, Button, Table } from 'reactstrap';

import {  TextFormat } from 'react-jhipster';




import { getEntities } from '../entities/item/item.reducer';
import { useAppDispatch, useAppSelector } from '../config/store';

export const ListaItens= ()  => {
    const dispatch = useAppDispatch();
    const itemList = useAppSelector(state => state.item.entities);

    useEffect(() => {
      dispatch(getEntities({}));
    }, []);

    return (
                <div>
                {itemList.map((item, i) => (
                  <div key={`entity-${i}`} data-cy="entityTable">
                    {/* <p>
                      {cadastroDoacao.dataDoacao ? (
                        <TextFormat type="date" value={cadastroDoacao.dataDoacao} format={APP_DATE_FORMAT} />
                      ) : null}
                    </p> */}

                    <p>Categoria: {item.categoriaItem}</p>
                    <p>Descrição: {item.descricao}</p>
                    <p>Imagem:<img src={`data:${item.imagemContentType};base64,${item.imagem}`} style={{ maxHeight: '50px' }} />
                         </p>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>

                ))}

  </div>

          )
  }
