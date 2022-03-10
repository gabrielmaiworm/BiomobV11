import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './cadastro-doacao.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const CadastroDoacaoDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const cadastroDoacaoEntity = useAppSelector(state => state.cadastroDoacao.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="cadastroDoacaoDetailsHeading">Cadastro Doação</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{cadastroDoacaoEntity.id}</dd>
          <dt>
            <span id="doacaoAnonima">Doação Anônima</span>
          </dt>
          <dd>{cadastroDoacaoEntity.doacaoAnonima ? 'Sim' : 'Não'}</dd>
          <dt>
            <span id="realizaEntrega">Realiza Entrega</span>
          </dt>
          <dd>{cadastroDoacaoEntity.realizaEntrega ? 'Sim' : 'Não'}</dd>
          <dt>
            <span id="dataDoacao">Data Doação</span>
          </dt>
          <dd>
            {cadastroDoacaoEntity.dataDoacao ? (
              <TextFormat value={cadastroDoacaoEntity.dataDoacao} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="logradouro">Logradouro</span>
          </dt>
          <dd>{cadastroDoacaoEntity.logradouro}</dd>
          <dt>
            <span id="numero">Número</span>
          </dt>
          <dd>{cadastroDoacaoEntity.numero}</dd>
          <dt>
            <span id="bairro">Bairro</span>
          </dt>
          <dd>{cadastroDoacaoEntity.bairro}</dd>
          <dt>
            <span id="cidade">Cidade</span>
          </dt>
          <dd>{cadastroDoacaoEntity.cidade}</dd>
          <dt>
            <span id="cep">CEP</span>
          </dt>
          <dd>{cadastroDoacaoEntity.cep}</dd>
          <dt>
            <span id="estado">Estado</span>
          </dt>
          <dd>{cadastroDoacaoEntity.estado}</dd>
          <dt>
            <span id="pais">País</span>
          </dt>
          <dd>{cadastroDoacaoEntity.pais}</dd>
          <dt>
            <span id="complemento">Complemento</span>
          </dt>
          <dd>{cadastroDoacaoEntity.complemento}</dd>
          <dt>Usuário</dt>
          <dd>{cadastroDoacaoEntity.nome ? cadastroDoacaoEntity.nome.nome : ''}</dd>
          <dt>Item</dt>
          <dd>{cadastroDoacaoEntity.descricao ? cadastroDoacaoEntity.descricao.descricao : ''}</dd>
        </dl>
        <Button tag={Link} to="/cadastro-doacao" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Voltar</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/cadastro-doacao/${cadastroDoacaoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Editar</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CadastroDoacaoDetail;
