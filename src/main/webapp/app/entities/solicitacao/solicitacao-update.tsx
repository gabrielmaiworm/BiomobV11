import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICadastroUser } from 'app/shared/model/cadastro-user.model';
import { getEntities as getCadastroUsers } from 'app/entities/cadastro-user/cadastro-user.reducer';
import { IItem } from 'app/shared/model/item.model';
import { getEntities as getItems } from 'app/entities/item/item.reducer';
import { IAcao } from 'app/shared/model/acao.model';
import { getEntities as getAcaos } from 'app/entities/acao/acao.reducer';
import { getEntity, updateEntity, createEntity, reset } from './solicitacao.reducer';
import { ISolicitacao } from 'app/shared/model/solicitacao.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const SolicitacaoUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const cadastroUsers = useAppSelector(state => state.cadastroUser.entities);
  const items = useAppSelector(state => state.item.entities);
  const acaos = useAppSelector(state => state.acao.entities);
  const solicitacaoEntity = useAppSelector(state => state.solicitacao.entity);
  const loading = useAppSelector(state => state.solicitacao.loading);
  const updating = useAppSelector(state => state.solicitacao.updating);
  const updateSuccess = useAppSelector(state => state.solicitacao.updateSuccess);
  const handleClose = () => {
    props.history.push('/solicitacao');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getCadastroUsers({}));
    dispatch(getItems({}));
    dispatch(getAcaos({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    values.dataSolicitacao = convertDateTimeToServer(values.dataSolicitacao);

    const entity = {
      ...solicitacaoEntity,
      ...values,
      nome: cadastroUsers.find(it => it.id.toString() === values.nome.toString()),
      descricao: items.find(it => it.id.toString() === values.descricao.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {
          dataSolicitacao: displayDefaultDateTime(),
        }
      : {
          ...solicitacaoEntity,
          dataSolicitacao: convertDateTimeFromServer(solicitacaoEntity.dataSolicitacao),
          nome: solicitacaoEntity?.nome?.id,
          descricao: solicitacaoEntity?.descricao?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="biomobV11App.solicitacao.home.createOrEditLabel" data-cy="SolicitacaoCreateUpdateHeading">
            Faça sua solicitação
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="solicitacao-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField label="Nome de quem receberá a doação" id="solicitacao-solicitante" name="solicitante" data-cy="solicitante" type="text" />
              {/* <ValidatedField label="Ativa" id="solicitacao-ativa" name="ativa" data-cy="ativa" check type="checkbox" /> */}
              <ValidatedField label="Doação Anônima" id="solicitacao-anonima" name="anonima" data-cy="anonima" check type="checkbox" />
              <ValidatedField
                label="Data Solicitação"
                id="solicitacao-dataSolicitacao"
                name="dataSolicitacao"
                data-cy="dataSolicitacao"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label="Endereço de Entrega"
                id="solicitacao-enderecoEntrega"
                name="enderecoEntrega"
                data-cy="enderecoEntrega"
                type="text"
              />
              <ValidatedField
                label="Local De Entrega"
                id="solicitacao-localDeEntrega"
                name="localDeEntrega"
                data-cy="localDeEntrega"
                type="text"
              />
              {/* <ValidatedField label="Aprovada" id="solicitacao-aprovado" name="aprovado" data-cy="aprovado" check type="checkbox" /> */}
              <ValidatedField
                label="Data da Aprovação"
                id="solicitacao-dataAprovacao"
                name="dataAprovacao"
                data-cy="dataAprovacao"
                type="date"
              />
              <ValidatedField id="solicitacao-nome" name="nome" data-cy="nome" label="Nome do Usuário Cadastrado" type="select">
                <option value="" key="0" />
                {cadastroUsers
                  ? cadastroUsers.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.nome}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField id="solicitacao-descricao" name="descricao" data-cy="descricao" label="Escolha o item a ser solicitado" type="select">
                <option value="" key="0" />
                {items
                  ? items.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.descricao}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/solicitacao" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Voltar</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Salvar
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SolicitacaoUpdate;
