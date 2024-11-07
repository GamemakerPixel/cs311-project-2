import { addCard } from "@/app/components/cards_server"


export default function Add() {
  const textInputClass = "bg-background mx-2 mb-2 p-1 rounded-lg"

  return (
    <div>
      <h1>Add a card:</h1>
      <form className="flex flex-col standard-panel items-center" action={addCard}>
        <label>Question:</label>
        <input type="text" name="question" className={textInputClass}></input>
        <label>Answer:</label>
        <input type="text" name="answer" className={textInputClass}></input>
        <button type="submit" className="standard-button">Add Card</button>
      </form>
    </div>
  );
}
