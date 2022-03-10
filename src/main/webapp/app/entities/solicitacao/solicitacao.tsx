import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntities } from './solicitacao.reducer';
import { ISolicitacao } from 'app/shared/model/solicitacao.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const Solicitacao = (props: RouteComponentProps<{ url: string }>) => {
  const dispatch = useAppDispatch();

  const solicitacaoList = useAppSelector(state => state.solicitacao.entities);
  const loading = useAppSelector(state => state.solicitacao.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  const { match } = props;

  return (
    <div>
      <h2 id="solicitacao-heading" data-cy="SolicitacaoHeading">
        Solicitações
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Atualizar lista
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Criar nova solicitação
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {solicitacaoList && solicitacaoList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Quem receberá a doação?</th>
                <th>Anônima</th>
                <th>Data de Solicitação</th>
                <th>Endereço de Entrega</th>
                <th>Local De Entrega</th>
                <th>Data de Aprovação</th>
                <th>Aprovada</th>
                <th>Ativa</th>
                <th>Usuário</th>
                <th>Item</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {solicitacaoList.map((solicitacao, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${solicitacao.id}`} color="link" size="sm">
                      {solicitacao.id}
                    </Button>
                  </td>
                  <td>{solicitacao.solicitante}</td>
                  <td>{solicitacao.anonima ? 'Sim' : 'Não'}</td>
                  <td>
                    {solicitacao.dataSolicitacao ? (
                      <TextFormat type="date" value={solicitacao.dataSolicitacao} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{solicitacao.enderecoEntrega}</td>
                  <td>{solicitacao.localDeEntrega}</td>
                  <td>
                    {solicitacao.dataAprovacao ? (
                      <TextFormat type="date" value={solicitacao.dataAprovacao} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{solicitacao.aprovado ? 'Sim' : 'Não'}</td>
                  <td>{solicitacao.ativa ? 'Sim' : 'Não'}</td>
                  <td>{solicitacao.nome ? <Link to={`cadastro-user/${solicitacao.nome.id}`}>{solicitacao.nome.nome}</Link> : ''}</td>
                  <td>{solicitacao.descricao ? <Link to={`item/${solicitacao.descricao.id}`}>{solicitacao.descricao.descricao}</Link> : ''}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${solicitacao.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">Detalhes</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${solicitacao.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Editar</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${solicitacao.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Deletar</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">Solicitações não encontradas</div>
        )}
      </div>
    </div>
  );
};

export default Solicitacao;
