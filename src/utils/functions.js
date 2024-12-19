const compareName = (name, surname) => {
  return `${name} ${surname}`;
};

const getInitial = (name, surname) => {
  const nameInitial = name[0].charAt(0).toUpperCase();
  const surnameInitial = surname[0].charAt(0).toUpperCase();
  return nameInitial + surnameInitial;
};

const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360); // 0-360 arası renk tonu
  const saturation = Math.floor(Math.random() * 20) + 30; // %30 - %50 arası doygunluk (düşük)
  const lightness = Math.floor(Math.random() * 20) + 70; // %70 - %90 arası açıklık (yüksek)

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export {compareName, getInitial, getRandomColor};
