// титульный экран

//Так называемые библиотеки 
//vvv - readline
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

//vvv - typetext
function typeText(text, delay = 100) {
    let index = 0;
    
    function type() {
        if (index < text.length) {
            process.stdout.write(text[index]);
            index++;
            setTimeout(type, delay);
        }
    }
    
    type();
}
;

//vvv - БОРТИКИ
function createBox(text) {  
    const lines = text.split('\n\n');
    const maxLength = Math.max(...lines.map(line => line.length));
    
    const topBottom = '—'.repeat(maxLength + 20);
    
    let result = topBottom + '\n\n';
    
    for (const line of lines) {
        const padding = ' '.repeat(maxLength - line.length);
        result += ` ${line}${padding} \n\n\n`;
    }
    
    result += topBottom;
    return result;
}


let startFrame = () => {
// ascii мясного отдела
console.log(
  ` \x1b[31m
█▀▄▀█ ▀▄    ▄ ██      ▄▄▄▄▄    ▄   ████▄ ▄█     ████▄    ▄▄▄▄▀ ██▄   ▄███▄   █            ▄▄▄▄▄     ▄   ▄███▄     ▄▄▄▄▀ ████▄ ▄████  ████▄ █▄▄▄▄ ██   
█ █ █   █  █  █ █    █     ▀▄   █  █   █ ██     █   █ ▀▀▀ █    █  █  █▀   ▀  █           █     ▀▄    █  █▀   ▀ ▀▀▀ █    █   █ █▀   ▀ █   █ █  ▄▀ █ █  
█ ▄ █    ▀█   █▄▄█ ▄  ▀▀▀▀▄ ██   █ █   █ ██     █   █     █    █   █ ██▄▄    █         ▄  ▀▀▀▀▄ █     █ ██▄▄       █    █   █ █▀▀    █   █ █▀▀▌  █▄▄█ 
█   █    █    █  █  ▀▄▄▄▄▀  █ █  █ ▀████ ▐█     ▀████    █     █  █  █▄   ▄▀ ███▄       ▀▄▄▄▄▀   █    █ █▄   ▄▀   █     ▀████ █      ▀████ █  █  █  █ 
   █   ▄▀        █          █  █ █        ▐             ▀      ███▀  ▀███▀       ▀                █  █  ▀███▀    ▀             █             █      █ 
  ▀             █           █   ██                                                                 █▐                           ▀           ▀      █  
               ▀                                                                                   ▐                                              ▀                                                             
\x1b[0m  `
)

//загрузка и запуск
function ProgressBar() {
    const steps = 10; // по 10%
    let current = 0;
    
    const interval = setInterval(() => {
        const percentage = current * 10;
        const hashes = '#'.repeat(current);
        const dashes = '-'.repeat(steps - current);
        
        const bar = `[${hashes}${dashes}] ${percentage}%`;
        process.stdout.write('\r' + bar);
        
        current++;
        
        if (current > steps) {
            clearInterval(interval);
            console.log('\n');

            startGame(); // запуск
        }
    }, 100);
}


function startGame(ProgressBar) {
      const chSe = "\n\ Выберите:: "
      rl.question(`> Начать игру - 1\n > ЧТО ЭТО - 2\n > Выйти - 3 \n\n${chSe}` , (ans) => {
      ans = ans.toLowerCase();
if (ans === `1`) {
        console.clear()
        console.log(createBox('помогите'));
          // ТУТ НАБОР ТЕКСТА С СЮЖЕТКОЙ, СНАЧАЛА СЮЖЕТКА КАК МЫ ИДЕМ ЗА МЯСОМ
          // ПОТОМ СИСТЕМА ЛОКАЦИЙ

    const mainChSe = "> Дальше - 1\n > Выйти - 2\n \n\n" + chSe //  ГЛАВНАЯ МРАЗЬ ЮТУБА 


      rl.question(`${mainChSe}` , (ans) => {
      ans = ans.toLowerCase();
        if ( ans === `1` ) {
            console.clear()
            console.log(createBox(`ээээээээ111`))
        } 
        
        
        
        
// бред сумашедшего
else if (ans === `2`) 
{
        console.log() // ну хз можно чето вставить смешное
        rl.close();
        return;
}

      });





// остальная залупа, не дающего никакого смысла
} else if (ans === `3`) {
  //по хорошему тут тоде надо сделать фрейм
      console.log(`\n МАМКА НАДАВАЛА ТЕБЕ ЛЕЩА ЗА ТО ЧТО ТЫ НЕ ПОШЕЛ ЗА МЯСОМ`);
      rl.close();
      return;
} else {
      console.log(`\n\n\n \x1b[31m НЕТ ТАКОЙ БУКВЫ! \x1b[0m `);
      console.log();
      startGame();
}

      });
}
console.log();
ProgressBar();

}
startFrame();
