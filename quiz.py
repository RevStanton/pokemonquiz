from pokemon_data import POKEMON
from questions import QUESTIONS

def ask_questions():
    answers = []
    for q in QUESTIONS:
        print(q["text"])
        for idx, c in enumerate(q["choices"], 1):
            print(f" {idx}. {c}")
        while True:
            choice = input("Select a number: ")
            if choice.isdigit() and 1 <= int(choice) <= len(q["choices"]):
                answers.append(int(choice)-1)
                break
            else:
                print("Invalid choice, try again.")
        print()
    return answers

def select_pokemon(answers):
    candidates = POKEMON
    for answer, question in zip(answers, QUESTIONS):
        mod = len(question["choices"])
        candidates = [p for p in candidates if p["id"] % mod == answer]
        if not candidates:
            break
    if not candidates:
        candidates = POKEMON
    return candidates[0]

def main():
    print("Pokemon Personality Quiz")
    print("Answer the following questions to discover your Pokemon match!\n")
    answers = ask_questions()
    result = select_pokemon(answers)
    print(f"You are most like: {result['name']}! (# {result['id']})")

if __name__ == "__main__":
    main()
