console.log("Hello! We are starting the program");

export const questions = async (n: number) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=${n}`);
  const { results } = (await response.json()) as { results: any[] };
  console.log(results);
  return results;
};
questions(10);
