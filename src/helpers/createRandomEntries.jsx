import { gql, useMutation } from "@apollo/client";

export default function CreateRandomExercisesButton() {
  function generateRandomExercise() {
    const names = [
      "Exercise 1",
      "Exercise 2",
      "Exercise 3",
      "Excercise Lorem ipsum",
      "Excercise dolor sit",
      "Excercise amet, qui",
      "Excercise minim labore",
      "Excercise adipisicing",
      "Excercise minim sint",
      "Excercise cillum sint",
      "Excercise consectetur cupidatat",
    ];
    const descriptions = [
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
      "Nisi anim cupidatat excepteur officia.",
      "Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.",
      "Nostrud officia pariatur ut officia.",
      "Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate.",
      "Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.",
      "Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.",
      "Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    ];
    const types = ["duration", "reps"];

    const ADD_EXERCISE = gql`
    mutation AddExercise{
      createExercise(data:{name: "${getRandom(
        names
      )}", description: "${getRandom(descriptions)}", type: ${getRandom(
      types
    )}}){
        id
        name
        description
        type
      }
    }

  `;
    return ADD_EXERCISE;
  }

  const [addExercise, { data, loading, error }] = useMutation(
    generateRandomExercise()
  );

  //const [addWorkout, {wo.data, wo.loading, wo.error}] = useMutation(ADD_WORKOUT);
  //const [addProgram, {pr.data, pr.loading, pr.error}] = useMUtation(ADD_PROGRAM);

  // const clickAndAdd = () => {
  //   addExercise();
  //   if (loading) {
  //     console.log("Loading...");
  //     return;
  //   } else if (error) {
  //     console.log("Error!");
  //     console.log("error.message");
  //     return;
  //   } else {
  //     console.log(data);
  //     return data;
  //   }
  // };
  //
  // const names = [
  //   "Exercise 1",
  //   "Exercise 2",
  //   "Exercise 3",
  //   "Excercise Lorem ipsum",
  //   "Excercise dolor sit",
  //   "Excercise amet, qui",
  //   "Excercise minim labore",
  //   "Excercise adipisicing",
  //   "Excercise minim sint",
  //   "Excercise cillum sint",
  //   "Excercise consectetur cupidatat",
  // ];

  if (loading) return `Loading...`;
  if (error) return `Error: ${error.message}`;
  if (data) console.log(data);
  return (
    <button onClick={addExercise} className="rounded-md bg-dmedium p-4">
      Add random Exercises
    </button>
  );
}

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
