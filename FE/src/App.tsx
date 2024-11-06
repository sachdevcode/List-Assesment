import React, { FormEvent } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import List from "./components/List";
import { useNameForm } from "./hooks/useNameForm";
import { useToast } from "./hooks/useToast";
import ErrorMessage from "./components/ErrorMessage";

const App: React.FC = () => {
  const { Toast, triggerToast } = useToast();

  const {isFormPending, name, setName, nameList, isLoading, error, addName } = useNameForm({
    triggerToast,
  });

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    addName();
  };

  return (
    <main className="app-container">
      <header>
        <h2>Name List</h2>
      </header>
      <form
        onSubmit={handleFormSubmit}
        className="input-group"
        aria-labelledby="input-section"
      >
        <Input
          value={name}
          className="input-field"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <Button
          type="submit"
          className="button"
          text="Add"
          disabled={isFormPending || !name}
          isLoading={isFormPending}
        />
        <ErrorMessage error={error} />
      </form>
      <section aria-labelledby="name-list">
        <List items={nameList} isLoading={isLoading}/>
      </section>
      <Toast />
    </main>
  );
};

export default App;
