const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const batteries = (state = { totalBatteries: 0 }, action) => {
    switch (action.type) {
      case 'ADD_BATTERIES':
        return { totalBatteries: state.totalBatteries + action.payload };
      default:
        return state;
    }
  };
  
  const totalBatteries = batteryBatches.reduce((state, batch) => {
    return batteries(state, { type: 'ADD_BATTERIES', payload: batch });
  }, { totalBatteries: 0 }).totalBatteries;
  
  console.log(totalBatteries);
  