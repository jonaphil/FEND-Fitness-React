import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { LoadingButton } from "../components/StatusElements/Loading";

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomInt(lowerLimit = 0, upperLimit = 10, step = 1) {
  const solution =
    Math.floor((Math.random() * (upperLimit - lowerLimit)) / step) * step +
    lowerLimit;
  return Math.round(solution); // It is rounded again, because I got problems of having floats in the graphql mutation string.
}

function shuffleArray(array) {
  let currentIndex = array.length;
  while (currentIndex > 0) {
    currentIndex -= 1;
    const randomIndex = Math.floor(Math.random() * currentIndex + 1);
    if (currentIndex !== randomIndex) {
      // const tempValue = array[currentIndex];
      // array[currentIndex] = array[randomIndex];
      // array[randomIndex] = tempValue;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }
}

function generateRandomList(length) {
  const list = Array.from(Array(length), (x, i) => i);
  shuffleArray(list);
  return list;
}

export function CreateRandomExerciseButton() {
  function generateRandomExerciseMutation() {
    const names = [
      "Exercise Lorem",
      "Exercise ipsum",
      "Exercise dolor",
      "Exercise sit",
      "Exercise amet",
      "Exercise consectetur",
      "Exercise adipisicing",
      "Exercise elit",
      "Exercise Eos",
      "Exercise sequi",
      "Exercise dignissimos",
      "Exercise consequuntur",
      "Exercise autem",
      "Exercise repudiandae",
      "Exercise delectus",
      "Exercise cupiditate",
      "Exercise rem",
      "Exercise minima",
      "Exercise perspiciatis",
      "Exercise iste",
      "Exercise odio",
      "Exercise ipsam",
      "Exercise alias",
      "Exercise ab",
      "Exercise itaque",
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
      "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.",
      "Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.",
      "Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben. Eines Tages aber beschloß eine kleine Zeile Blindtext, ihr Name war Lorem Ipsum, hinaus zu gehen in die weite Grammatik.",
      "Der große Oxmox riet ihr davon ab, da es dort wimmele von bösen Kommata, wilden Fragezeichen und hinterhältigen Semikoli, doch das Blindtextchen ließ sich nicht beirren. Es packte seine sieben Versalien, schob sich sein Initial in den Gürtel und machte sich auf den Weg.",
      "Als es die ersten Hügel des Kursivgebirges erklommen hatte, warf es einen letzten Blick zurück auf die Skyline seiner Heimatstadt Buchstabhausen, die Headline von Alphabetdorf und die Subline seiner eigenen Straße, der Zeilengasse.",
      "Wehmütig lief ihm eine rhetorische Frage über die Wange, dann setzte es seinen Weg fort. Unterwegs traf es eine Copy.",
      "Doch alles Gutzureden konnte es nicht überzeugen und so dauerte es nicht lange, bis ihm ein paar heimtückische Werbetexter auflauerten, es mit Longe und Parole betrunken machten und es dann in ihre Agentur schleppten, wo sie es für ihre Projekte wieder und wieder mißbrauchten.",
      "Und wenn es nicht umgeschrieben wurde, dann benutzen Sie es immernoch. Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.",
      "Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.",
      "Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben. Eines Tages aber beschloß eine kleine Zeile Blindtext, ihr Name war Lorem Ipsum, hinaus zu gehen in die weite Grammatik.",
      "Der große Oxmox riet ihr davon ab, da es dort wimmele von bösen Kommata, wilden Fragezeichen und hinterhältigen Semikoli, doch das Blindtextchen ließ sich nicht beirren. Es packte seine sieben Versalien, schob sich sein Initial in den Gürtel und machte sich auf den Weg.",
      "Als es die ersten Hügel des Kursivgebirges erklommen hatte, warf es einen letzten Blick zurück auf die Skyline seiner Heimatstadt Buchstabhausen, die Headline von Alphabetdorf und die Subline seiner eigenen Straße, der Zeilengasse. Wehmütig lief ihm eine rhetorische Frage über die Wange, dann setzte es seinen Weg fort.",
      "Doch alles Gutzureden konnte es nicht überzeugen und so dauerte es nicht lange, bis ihm ein paar heimtückische Werbetexter auflauerten, es mit Longe und Parole betrunken machten und es dann in ihre Agentur schleppten, wo sie es für ihre Projekte wieder und wieder mißbrauchten. Und wenn es nicht umgeschrieben wurde, dann benutzen Sie es immernoch.",
      "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien.",
      "Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben. Eines Tages aber beschloß eine kleine Zeile Blindtext, ihr Name war Lorem Ipsum, hinaus zu gehen in die weite Grammatik. Der große Oxmox riet ihr davon ab, da es dort wimmele von bösen Kommata, wilden Fragezeichen und hinterhältigen Semikoli, doch das Blindtextchen ließ sich nicht beirren. Es packte seine sieben Versalien, schob sich sein Initial in den Gürtel und machte.",
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
    generateRandomExerciseMutation()
  );

  if (loading) return "Loading...";
  if (error) console.log(`Error: ${error.message}`);
  if (data) console.log(data);
  return (
    <button onClick={addExercise} className="rounded-md bg-dmedium p-4">
      Add random Exercises
    </button>
  );
}

export function CreateRandomWorkoutButton({ exerciseList }) {
  function generateRandomWorkoutMutation() {
    const categoryList = [
      "cardio",
      "coordination",
      "mobility",
      "weightTraining",
    ];
    const nameList = [
      "Workout Lorem",
      "Workout ipsum",
      "Workout dolor",
      "Workout sit",
      "Workout amet",
      "Workout consectetur",
      "Workout adipisicing",
      "Workout elit",
      "Workout Eos",
      "Workout sequi",
      "Workout dignissimos",
      "Workout consequuntur",
      "Workout autem",
      "Workout repudiandae",
      "Workout delectus",
      "Workout cupiditate",
      "Workout rem",
      "Workout minima",
      "Workout perspiciatis",
      "Workout iste",
      "Workout odio",
      "Workout ipsam",
      "Workout alias",
      "Workout ab",
      "Workout itaque",
    ];
    const possibleIndices = generateRandomList(exerciseList.length); // Why is the simple Copy not working? There is some odd bug!
    const amountExercises = randomInt(
      10,
      exerciseList.length < 20 ? exerciseList.length : 20
    ); // between 10 and 20 exercises
    const duration = randomInt(amountExercises * 1.2, amountExercises * 1.7); // between 1.2 and 1.7 minutes per exercise
    const exerciseTypeList = [
      ["reps", "ExerciseWithReps"],
      ["duration", "ExerciseWithDuration"],
    ];

    function generateWorkoutExercisesList() {
      let workoutExercisesString = `[`;

      for (let i = 0; i < amountExercises; i += 1) {
        const exerciseType = getRandom(exerciseTypeList);
        const exercise = exerciseList[possibleIndices[i]];
        const simpleExerciseString = `
        {${exerciseType[1]}: 
          {${exerciseType[0]}: ${
          exerciseType[0] === "reps" ? randomInt(7, 15) : randomInt(30, 90, 10)
        }, exercise: {
            connect: {
              id: "${exercise.id}"} } } },`;
        workoutExercisesString += simpleExerciseString;
      }
      workoutExercisesString += "]";
      return workoutExercisesString;
    }
    const ADD_WORKOUT = gql`
    mutation AddWorkout {
      createWorkout(
        data: {
          name: "${getRandom(nameList)}", 
          category: ${getRandom(categoryList)}, 
          duration: ${duration}, 
          exercises: { create:
            ${generateWorkoutExercisesList()}
          }
        }
    ) {
        id
        name
        exercises {
          ... on ExerciseWithReps {
            exercise {
              name
            }
            reps
          }
          ... on ExerciseWithDuration {
            exercise {
              name
            }
            duration
          }
        }
      }
    }
    `;
    return ADD_WORKOUT;
  }

  const [addWorkout, { data, loading, error }] = useMutation(
    generateRandomWorkoutMutation()
  );

  if (loading) return "Loading...";
  if (error) console.log(`Error: ${error.message}`);
  if (data) console.log(data);
  return (
    <button onClick={addWorkout} className="rounded-md bg-dmedium p-4">
      Add random Workout
    </button>
  );
}

export function CreateRandomProgramButton({ workoutList, assetList }) {
  function generateRandomProgramMutation() {
    function generateWorkouts() {
      // console.log(workoutList);
      // const possibleWorkouts = workoutList.slice();
      // shuffleArray(possibleWorkouts);
      // console.log(possibleWorkouts);
      const randomIndex = generateRandomList(workoutList.length);
      console.log(randomIndex);
      const focusCounter = {
        cardio: 0,
        coordination: 0,
        mobility: 0,
        weightTraining: 0,
      };
      const workoutListLength = randomInt(
        7,
        workoutList.length < 28 ? workoutList.length : 28
      );
      let workoutListString = "[";
      for (let day = 1; day <= workoutListLength; day += 1) {
        const workout = workoutList[randomIndex[day - 1]];
        const singleWorkoutString = `{
          day: ${day},
          workout: {
            connect: {id:"${workout.id}"}
          }
        },`;
        workoutListString += singleWorkoutString;
        focusCounter[workout.category] += 1;
      }
      workoutListString += "]";
      const focus = Object.keys(focusCounter).reduce((x, y) =>
        focusCounter[x] > focusCounter[y] ? x : y
      );
      return [workoutListString, focus];
    }

    const descriptionList = [
      "Er hörte leise Schritte hinter sich. Das bedeutete nichts Gutes. Wer würde ihm schon folgen, spät in der Nacht und dazu noch in dieser engen Gasse mitten im übel beleumundeten Hafenviertel? Gerade jetzt, wo er das Ding seines Lebens gedreht hatte und mit der Beute verschwinden wollte!",
      "Hatte einer seiner zahllosen Kollegen dieselbe Idee gehabt, ihn beobachtet und abgewartet, um ihn nun um die Früchte seiner Arbeit zu erleichtern? Oder gehörten die Schritte hinter ihm zu einem der unzähligen Gesetzeshüter dieser Stadt, und die stählerne Acht um seine Handgelenke würde gleich zuschnappen?",
      "Er konnte die Aufforderung stehen zu bleiben schon hören. Gehetzt sah er sich um. Plötzlich erblickte er den schmalen Durchgang. Blitzartig drehte er sich nach rechts und verschwand zwischen den beiden Gebäuden. Beinahe wäre er dabei über den umgestürzten Mülleimer gefallen, der mitten im Weg lag.",
      "Er versuchte, sich in der Dunkelheit seinen Weg zu ertasten und erstarrte: Anscheinend gab es keinen anderen Ausweg aus diesem kleinen Hof als den Durchgang, durch den er gekommen war. Die Schritte wurden lauter und lauter, er sah eine dunkle Gestalt um die Ecke biegen.",
      "Fieberhaft irrten seine Augen durch die nächtliche Dunkelheit und suchten einen Ausweg. War jetzt wirklich alles vorbei, waren alle Mühe und alle Vorbereitungen umsonst?",
      "Er presste sich ganz eng an die Wand hinter ihm und hoffte, der Verfolger würde ihn übersehen, als plötzlich neben ihm mit kaum wahrnehmbarem Quietschen eine Tür im nächtlichen Wind hin und her schwang. Könnte dieses der flehentlich herbeigesehnte Ausweg aus seinem Dilemma sein?",
      "Langsam bewegte er sich auf die offene Tür zu, immer dicht an die Mauer gepresst. Würde diese Tür seine Rettung werden? Er hörte leise Schritte hinter sich. Das bedeutete nichts Gutes. Wer würde ihm schon folgen, spät in der Nacht und dazu noch in dieser engen Gasse mitten im übel beleumundeten Hafenviertel?",
      "Gerade jetzt, wo er das Ding seines Lebens gedreht hatte und mit der Beute verschwinden wollte! Hatte einer seiner zahllosen Kollegen dieselbe Idee gehabt, ihn beobachtet und abgewartet, um ihn nun um die Früchte seiner Arbeit zu erleichtern?",
      "Oder gehörten die Schritte hinter ihm zu einem der unzähligen Gesetzeshüter dieser Stadt, und die stählerne Acht um seine Handgelenke würde gleich zuschnappen? Er konnte die Aufforderung stehen zu bleiben schon hören. Gehetzt sah er sich um. Plötzlich erblickte er den schmalen Durchgang.",
      "Blitzartig drehte er sich nach rechts und verschwand zwischen den beiden Gebäuden. Beinahe wäre er dabei über den umgestürzten Mülleimer gefallen, der mitten im Weg lag. Er versuchte, sich in der Dunkelheit seinen Weg zu ertasten und erstarrte: Anscheinend gab es keinen anderen Ausweg aus diesem kleinen Hof als den Durchgang, durch den er gekommen war.",
      "Die Schritte wurden lauter und lauter, er sah eine dunkle Gestalt um die Ecke biegen. Fieberhaft irrten seine Augen durch die nächtliche Dunkelheit und suchten einen Ausweg. War jetzt wirklich alles vorbei, waren alle Mühe und alle Vorbereitungen umsonst?",
      "Er presste sich ganz eng an die Wand hinter ihm und hoffte, der Verfolger würde ihn übersehen, als plötzlich neben ihm mit kaum wahrnehmbarem Quietschen eine Tür im nächtlichen Wind hin und her schwang.Könnte dieses der flehentlich herbeigesehnte Ausweg aus seinem Dilemma sein ? Langsam bewegte er sich auf die offene Tür zu, immer dicht an die Mauer gepresst.Würde diese Tür seine Rettung werden ? Er hörte leise Schritte hinter sich. ",
      "Das bedeutete nichts Gutes.Wer würde ihm schon folgen, spät in der Nacht und dazu noch in dieser engen Gasse mitten im übel beleumundeten Hafenviertel ? Gerade jetzt, wo er das Ding seines Lebens gedreht hatte und mit der Beute verschwinden wollte! Hatte einer seiner zahllosen Kollegen dieselbe Idee gehabt, ihn ... ",
    ];
    const duration = randomInt(4, 15);
    const difficultyList = ["easy", "hard", "moderate"];
    const nameList = [
      "Toya",
      "Sebastian",
      "Eugina",
      "Djamila",
      "Ernest",
      "Adib",
      "Carla",
      "Davida",
      "Celina",
      "Zandra",
      "Joe",
      "Cleva",
      "Maurice",
      "Yaroslava",
      "Michael",
      "Cristina",
      "Sophus",
      "Shawna",
      "Davina",
      "Theodora",
      "Christel",
      "Donald",
      "Brendan",
      "Anuj",
    ];

    const [workoutsString, focus] = generateWorkouts();
    const ADD_PROGRAM = gql`
    mutation AddProgram {
      createProgram(
        data: {
          name: "Exercise ${getRandom(nameList)}",
          image: { connect:
            {id: "${getRandom(assetList).id}"}
          },
          duration: ${duration},
          difficulty: ${getRandom(difficultyList)},
          description: "${getRandom(descriptionList)}",
          workoutsWithDay: { create: ${workoutsString}},
          focus: ${focus}
        }
      ){
        name
        image {
          id
          url
        }
        duration
        difficulty
        description
        workoutsWithDay{
          id
        }
        focus
      }
    }`;
    console.log(ADD_PROGRAM);
    return ADD_PROGRAM;
  }

  const [addProgram, { data, loading, error }] = useMutation(
    generateRandomProgramMutation()
  );

  if (loading) return <LoadingButton />;
  if (error) console.log(`Error: ${error.message}`);
  if (data) console.log(data);
  return (
    <button onClick={addProgram} className="rounded-md bg-dmedium p-4">
      Add random Program
    </button>
  );
}

// TODO Implement automatic publishing after adding the entry.
