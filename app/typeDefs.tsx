type Props = {
    boardData: string[];
    setBoardData: (data: string[]) => void;
    turn: string;
    setTurn: (turn: string) => void;
    message: string;
    setMessage: (message: string) => void;
  };

  export default Props