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
import { getEntity, updateEntity, createEntity, reset } from './cadastro-doacao.reducer';
import { ICadastroDoacao } from 'app/shared/model/cadastro-doacao.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { Tooltip } from '@material-ui/core';

export const CadastroDoacaoUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const cadastroUsers = useAppSelector(state => state.cadastroUser.entities);
  const items = useAppSelector(state => state.item.entities);
  const acaos = useAppSelector(state => state.acao.entities);
  const cadastroDoacaoEntity = useAppSelector(state => state.cadastroDoacao.entity);
  const loading = useAppSelector(state => state.cadastroDoacao.loading);
  const updating = useAppSelector(state => state.cadastroDoacao.updating);
  const updateSuccess = useAppSelector(state => state.cadastroDoacao.updateSuccess);
  const handleClose = () => {
    props.history.push('/cadastro-doacao');
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
    values.dataDoacao = convertDateTimeToServer(values.dataDoacao);

    const entity = {
      ...cadastroDoacaoEntity,
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
          dataDoacao: displayDefaultDateTime(),
        }
      : {
          ...cadastroDoacaoEntity,
          dataDoacao: convertDateTimeFromServer(cadastroDoacaoEntity.dataDoacao),
          nome: cadastroDoacaoEntity?.nome?.id,
          descricao: cadastroDoacaoEntity?.descricao?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="biomobV11App.cadastroDoacao.home.createOrEditLabel" data-cy="CadastroDoacaoCreateUpdateHeading">
            Faça sua Doação
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField name="id" required readOnly id="cadastro-doacao-id" label="ID" validate={{ required: true }} />
              ) : null}
              <Tooltip title="Seus dados não ficaram disponíveis para o público">
              <ValidatedField
                label="Doação Anônima"
                id="cadastro-doacao-doacaoAnonima"
                name="doacaoAnonima"
                data-cy="doacaoAnonima"
                check
                type="checkbox"
              />
              </Tooltip>
              <Tooltip title="Você se disponibiliza a fazer a entrega da doação">
              <ValidatedField
                label="Realiza Entrega"
                id="cadastro-doacao-realizaEntrega"
                name="realizaEntrega"
                data-cy="realizaEntrega"
                check
                type="checkbox"
              /></Tooltip>
              <ValidatedField
                label="Data Doação"
                id="cadastro-doacao-dataDoacao"
                name="dataDoacao"
                data-cy="dataDoacao"
                type="datetime-local"
                placeholder="DD-MM-AAAA HH:mm"
              />
              <ValidatedField placeholder='Seu País' label="País" id="cadastro-doacao-pais" name="pais" data-cy="pais" type="text" />
              <ValidatedField placeholder='Seu estado' label="Estado" id="cadastro-doacao-estado" name="estado" data-cy="estado" type="text" />
              <ValidatedField placeholder='Sua cidade' label="Cidade" id="cadastro-doacao-cidade" name="cidade" data-cy="cidade" type="text" />
              <ValidatedField placeholder='Apenas números' label="CEP" id="cadastro-doacao-cep" name="cep" data-cy="cep" type="text" />
              <ValidatedField placeholder='Seu bairro' label="Bairro" id="cadastro-doacao-bairro" name="bairro" data-cy="bairro" type="text" />
              <ValidatedField placeholder='Ex: Rua Alves Felipe da Cunha' label="Logradouro" id="cadastro-doacao-logradouro" name="logradouro" data-cy="logradouro" type="text" />
              <ValidatedField placeholder='Número' label="Número" id="cadastro-doacao-numero" name="numero" data-cy="numero" type="text" />
              <ValidatedField placeholder='EX: Sala 2' label="Complemento" id="cadastro-doacao-complemento" name="complemento" data-cy="complemento" type="text" />
              <ValidatedField id="cadastro-doacao-nome" name="nome" data-cy="nome" label="Informe um Usuário cadastrado" type="select">
                <option value="" key="0" />
                {cadastroUsers
                  ? cadastroUsers.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.nome}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField id="cadastro-doacao-descricao" name="descricao" data-cy="descricao" label="Item a ser doado" type="select">
                <option value="" key="0" />
                {items
                  ? items.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.descricao}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/cadastro-doacao" replace color="info">
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

export default CadastroDoacaoUpdate;
