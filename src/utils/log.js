const log = () => {
  const args = [].slice.call(arguments); // using this instead of spread syntax because it was causing errors
  console.log(`[React Albus] `, ...args);
};

export default log;
