import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './acao.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const AcaoDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const acaoEntity = useAppSelector(state => state.acao.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="acaoDetailsHeading">Ação</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{acaoEntity.id}</dd>
          <dt>
            <span id="dataCriacao">Data Criação</span>
          </dt>
          <dd>{acaoEntity.dataCriacao ? <TextFormat value={acaoEntity.dataCriacao} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="usuarioCriacaoAcao">Usuário Criação Ação</span>
          </dt>
          <dd>{acaoEntity.usuarioCriacaoAcao}</dd>
          <dt>
            <span id="pendente">Pendente</span>
          </dt>
          <dd>{acaoEntity.pendente ? 'true' : 'false'}</dd>
          <dt>
            <span id="dataExecucaoAcao">Data Execução Ação</span>
          </dt>
          <dd>
            {acaoEntity.dataExecucaoAcao ? (
              <TextFormat value={acaoEntity.dataExecucaoAcao} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="ativa">Ativa</span>
          </dt>
          <dd>{acaoEntity.ativa ? 'true' : 'false'}</dd>
          <dt>
            <span id="foto">Imagem</span>
          </dt>
          <dd>
            {acaoEntity.foto ? (
              <div>
                {acaoEntity.fotoContentType ? <a onClick={openFile(acaoEntity.fotoContentType, acaoEntity.foto)}>Open&nbsp;</a> : null}
                <span>
                  {acaoEntity.fotoContentType}, {byteSize(acaoEntity.foto)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="observacoes">Observacoes</span>
          </dt>
          <dd>{acaoEntity.observacoes}</dd>
          <dt>Cadastro Doação</dt>
          <dd>{acaoEntity.cadastroDoacao ? acaoEntity.cadastroDoacao.id : ''}</dd>
          <dt>Solicitação</dt>
          <dd>{acaoEntity.solicitacao ? acaoEntity.solicitacao.solicitante : ''}</dd>
          <dt>Cadastro Usuário</dt>
          <dd>{acaoEntity.cadastroUser ? acaoEntity.cadastroUser.nome : ''}</dd>
        </dl>
        <Button tag={Link} to="/acao" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Voltar</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/acao/${acaoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Editar</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AcaoDetail;
