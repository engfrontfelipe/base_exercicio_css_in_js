import styled from 'styled-components'

const FormVagasEstilo = styled.form`
  form {
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: var(--cor-secundaria);
    padding: 32px;
    border-radius: 12px;
    margin-top: 40px;
  }

  input {
    padding: 0 60px;
    outline-color: var(--cor-principal);
  }

  button {
    background-color: var(--cor-principal);
    border: 1px solid var(--cor-principal);
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    color: var(--cor-secundaria);
    margin-left: 8px;
    cursor: pointer;
  }
`
export default FormVagasEstilo
