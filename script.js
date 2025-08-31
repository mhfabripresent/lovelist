function IrParaLista(){
    window.location.href = "list.html"
}

// Lista de motivos
    const motivos = [
        "Porque você sorri de um jeito que ilumina o meu dia 😊",
        "Porque você sempre sabe como me acalmar 🤍",
        "Porque você acredita em mim, mesmo quando eu duvido de mim mesmo 🙏",
        "Porque você me faz rir em qualquer situação 😂",
        "Porque você me entende sem eu precisar falar muito 🤫",
        "Porque você é carinhosa comigo 🥰",
        "Porque você se preocupa com os mínimos detalhes 🌸",
        "Porque você me apoia nos meus sonhos ✨",
        "Porque você me inspira a ser uma pessoa melhor 💪",
        "Porque você é minha companheira em todos os momentos 👩‍❤️‍👨",
        "Porque você é linda de um jeito único 💖",
        "Porque você me dá segurança 🔒",
        "Porque você tem paciência comigo (só um pouquinho)🕊️",
        "Porque você me ajuda nas minhas escolhas 🤝",
        "Porque você sabe ser fofa e brava ao mesmo tempo 😍😡",
        "Porque você se importa de verdade comigo 💓",
        "Porque você cuida de mim quando eu preciso 🫂",
        "Porque você me abraça do jeitinho que eu gosto 🤗",
        "Porque você é minha melhor amiga 👯",
        "Porque você confia em mim 🔑",
        "Porque você acredita no nosso amor 💞",
        "Porque você me faz sentir especial 🌟",
        "Porque você sempre sabe o que falar mesmo quando não sabe 🗣️",
        "Porque você é única pra mim 💎",
        "Porque você tem um jeito doce de falar 🍯",
        "Porque você é divertida 😄",
        "Porque você ri até das minhas piadas ruins 🤭",
        "Porque você se importa com o nosso futuro 🏡",
        "Porque você valoriza as pequenas coisas 🌻",
        "Porque você me dá forças para continuar e melhorar ⚡",
        "Porque você tem um olhar que me hipnotiza 👀",
        "Porque você tem uma voz que me acalma 🎶",
        "Porque você é sincera comigo 🤍",
        "Porque você é determinada e esforçada 🏆",
        "Porque você sonha junto comigo 🌙",
        "Porque você acredita no nosso futuro 💍",
        "Porque você me motiva a lutar 🔥",
        "Porque você tem um jeito único de amar 💗",
        "Porque você se importa com os meus sentimentos ❤️",
        "Porque você compartilha os momentos bons e ruins comigo 🤲",
        "Porque você respeita minhas escolhas (mas só quando vc gosta tbm né) 🙌",
        "Porque você tem paciência quando eu erro (de vez em quando) 💭",
        "Porque você é cheia de surpresas 🎁",
        "Porque você tem um abraço que cura tudo 🤍",
        "Porque você me beija como ninguém 😘",
        "Porque você é inteligente 🧠",
        "Porque você é criativa 🎨",
        "Porque você é guerreira 🛡️",
        "Porque você é doce comigo 🍫",
        "Porque você tem um coração enorme 💝",
        "Porque você é carismática ✨",
        "Porque você me faz sentir amado de verdade 💞",
        "Porque você me valoriza 🥇",
        "Porque você não desiste da gente 🔥",
        "Porque você tem um jeito especial de dizer 'eu te amo' 💌",
        "Porque você é verdadeira comigo 💯",
        "Porque você me aceita do jeito maluco que eu sou 🫶",
        "Porque você tem um cheiro inesquecível 🌹",
        "Porque você me dá paz ☮️",
        "Porque você é a minha paz 🕊️",
        "Porque você acredita na gente 🤝",
        "Porque você é parceira em qualquer aventura 🌍",
        "Porque você me faz rir quando eu quero chorar 😅",
        "Porque você me olha como se eu fosse único 👁️‍🗨️",
        "Porque você é minha confidente 🔐",
        "Porque você divide seus segredos comigo 🗝️",
        "Porque você me protege 🛡️",
        "Porque você faz planos comigo 🗓️",
        "Porque você é a minha melhor escolha 🏅",
        "Porque você é a resposta das minhas orações 🙌",
        "Porque você me faz querer ser melhor 🧗",
        "Porque você é minha inspiração 🌠",
        "Porque você me dá motivos para sorrir 😁",
        "Porque você valoriza cada momento ao meu lado ⏳",
        "Porque você é divertida até nas coisas simples 🛋️",
        "Porque você gosta de estar comigo 💑",
        "Porque você demonstra amor em pequenos gestos 🫶",
        "Porque você pensa em mim durante o dia 💭",
        "Porque você sente minha falta 🥺",
        "Porque você é minha companheira de vida 👩‍❤️‍👨",
        "Porque você me faz acreditar no amor 💕",
        "Porque você é minha calma no meio do caos 🌈",
        "Porque você entende meus silêncios 🤫",
        "Porque você respeita meus momentos 🤍",
        "Porque você cuida de mim sem eu precisar pedir 🫂",
        "Porque você é minha cúmplice 👀",
        "Porque você compartilha minhas risadas 😂",
        "Porque você compartilha minhas lágrimas 😢",
        "Porque você está sempre ao meu lado 🚶‍♀️🚶‍♂️",
        "Porque você não mede esforços por mim 💪",
        "Porque você se dedica ao nosso relacionamento 🌹",
        "Porque você é romântica 💘",
        "Porque você adora me surpreender 🎉",
        "Porque você me apoia em tudo 🙏",
        "Porque você me faz sentir importante 🏅",
        "Porque você tem uma beleza que vai além da aparência 🌟",
        "Porque você tem um jeitinho só seu 🌷",
        "Porque você é incrível ✨",
        "Porque você é perfeita pra mim 💎",
        "Porque você é minha felicidade 😍",
        "Porque você me completa 🧩",
        "Porque você sabe me ouvir 👂",
        "Porque você me dá conselhos sinceros 📝",
        "Porque você gosta das minhas loucuras 🤪",
        "Porque você compartilha seus sonhos comigo 🌙",
        "Porque você adora aprender coisas novas ao meu lado 📚",
        "Porque você é aventureira comigo (se é que você me entende) 🗺️",
        "Porque você é calma quando eu sou agitado 🌊",
        "Porque você é agitada quando eu sou calmo 🔥",
        "Porque você me equilibra ⚖️",
        "Porque você é compreensiva ❤️",
        "Porque você é paciente comigo 🙇",
        "Porque você valoriza nosso relacionamento 💕",
        "Porque você me respeita 🤍",
        "Porque você é apaixonante 🥵",
        "Porque você é dedicada 🛠️",
        "Porque você se importa com o nosso futuro 🏡",
        "Porque você sonha com a gente juntos 💍",
        "Porque você faz qualquer lugar ficar especial 🏖️",
        "Porque você é inesquecível 🖤",
        "Porque você é intensa 🔥",
        "Porque você é verdadeira no que sente 💯",
        "Porque você transforma tudo em amor ❤️",
        "Porque você é generosa 🎁",
        "Porque você é sensível 🌸",
        "Porque você é forte 🦋",
        "Porque você é única entre milhões 💎",
        "Porque você é minha prioridade ❤️",
        "Porque você é minha sorte 🍀",
        "Porque você é o amor da minha vida 💘",
        "Porque você é o meu presente mais bonito 🎀",
        "Porque eu simplesmente não consigo imaginar minha vida sem você 🌹",
        "E por fim... EU TE AMO LETICIA!!! 🫶"
        // ... até 132 motivos
    ];

    let indice = -1; // começa antes do primeiro

    function atualizarTela() {
      if (indice >= 0 && indice < motivos.length) {
        document.getElementById("motivo").textContent = motivos[indice];
        document.getElementById("contador").textContent = 
          `Motivo ${indice + 1} de ${motivos.length}`;
      } else if (indice >= motivos.length) {
        document.getElementById("motivo").textContent = "Você já viu todos os motivos 🥰";
        document.getElementById("contador").textContent = "";
      } else {
        document.getElementById("motivo").textContent = "Clique em \"Próximo\" para ver o primeiro motivo!";
        document.getElementById("contador").textContent = "";
      }
    }

    function proximoMotivo() {
      if (indice < motivos.length) {
        indice++;
        atualizarTela();
      }
    }

    function anteriorMotivo() {
      if (indice > 0) {
        indice--;
        atualizarTela();
      }
    }