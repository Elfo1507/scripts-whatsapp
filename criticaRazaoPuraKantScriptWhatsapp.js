async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	let main = document.querySelector("#main")
	let textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`Versão eletrônica do livro “Crítica da Razão Pura”
Autor: Emmanuel Kant
Tradução: J. Rodrigues de Merege
Créditos da digitalização: Membros do grupo de discussão Acrópolis (Filosofia)
Homepage do grupo: http://br.egroups.com/group/acropolis/
A distribuição desse arquivo (e de outros baseados nele) é livre, desde que se dê os créditos da digitalização aos membros do grupo
Acrópolis e se cite o endereço da homepage do grupo no corpo do texto do arquivo em questão, tal como está acima.

 Crítica da Razão Pura
 Imanuel Kant
INTRODUÇÃO.......................................................................................................................................................................3
I — DA DISTINÇÃO ENTRE O CONHECIMENTO PURO E O EMPÍRICO......................................................................3
II — ACHAMO-NOS DE POSSE DE CERTOS CONHECIMENTOS “A PRIORI” E O PRÓPRIO SENSO COMUM
NÃO OS DISPENSA.................................................................................................................................................................4
III — A FILOSOFIA NECESSITA DE UMA CIÊNCIA QUE DETERMINE A POSSIBILIDADE , OS PRINCÍPIOS E A
EXTENSÃO DE TODOS OS CONHECIMENTOS “A PRIORI”...........................................................................................5
IV — DIFERENÇA ENTRE O JUÍZO ANALÍTICO E O SINTÉTICO................................................................................7
V — OS JUÍZOS MATEMÁTICOS S ÃO TODOS SINTÉTICOS.........................................................................................8
VI — PROBLEMA GERAL DA RAZÃO PURA................................................................................................................ 10
VII — IDÉIA E DIVISÃO DE UMA CIÊNCIA PARTICULAR SOB O NOME DE CRÍTICA DA RAZÃO PURA 12
PARTE PRIMEIRA - DA TEORIA ELEMENTAR TRANSCENDENTAL ..................................................... 15
ESTÉTICA TRANSCENDENTAL ........................................................................................................................................ 15
PRIMEIRA SEÇÃO.............................................................................................................................................................. 16
DA ESTÉTICA TRANSCENDENTAL DO ESPAÇO........................................................................................................... 16
Exposição metafísica deste conceito ......................................................................................................................... 16
EXPOSIÇÃO TRANSCENDENTAL DO CONCEITO DE ESPAÇO.................................................................................... 17
Consequências dos conceitos precedentes............................................................................................................... 18
SEGUNDA SEÇÃO............................................................................................................................................................... 19
DA ESTÉTICA TRANSCENDENTAL DO TEMPO............................................................................................................ 19
Exposição metafísica do conceito de tempo............................................................................................................. 20
Exposição transcendental do conceito de tempo..................................................................................................... 20
Corolários destes conceitos........................................................................................................................................ 21
Explicação ...................................................................................................................................................................... 22
Observações gerais sobre a Estética transcendental............................................................................................. 25
Conclusão da Estética transcendental...................................................................................................................... 30
PARTE SEGUNDA - DA TEORIA ELEMENTAR TRAN SCENDENTAL...................................................... 31
LÓGICA TRANSCENDENTAL..................................................................................................................................... 31
INTRODUÇÃO ................................................................................................................................................................... 31
IDÉIA DE UMA LÓGICA TRANSCENDENTAL ................................................................................................................ 31
I — Da Lógica em geral .............................................................................................................................................. 31
II — Da Lógica transcendental.................................................................................................................................. 33
III — Divisão da Lógica geral em Analítica e Dialética ....................................................................................... 34
1V — Divisão da Lógica transcendental em analítica e Dialética transcendental ........................................... 35
PRIMEIRA DIVISÃO DA LÓGICA TRANSCENDENTAL - ANALÍTICA TRANSCENDENTAL........ 37
LIVRO PRIMEIRO - DA ANALÍTICA TRANSCENDENTAL.......................................................................... 38
ANALÍTICA DOS CONCEITOS........................................................................................................................................... 38
CAPITULO 1 - ORIENTAÇÃO PARA A DESCOBERTA DE TODOS OS CONCEITOS PUROS DO
ENTENDIMENTO.............................................................................................................................................................. 38
PRIMEIRA S EÇÃO - ORIENTAÇÃO TRANSCENDENTAL PARA A DESCOBERTA DE TODOS OS CONCEITOS DO
ENTENDIMENTO................................................................................................................................................................ 39
Do uso lógico do entendimento em geral................................................................................................................. 39
SEGUNDA SEÇÃO - DA FUNÇÃO LÓGICA DO ENTENDIMENTO NO JUÍZO ............................................................... 40
TERCEIRA SEÇÃO - DOS CONCEITOS PUROS DO ENTENDIMENTO OU CATEGORIAS ........................................... 42
CAPITULO II - DEDUÇÃO DOS CONCEITOS PUROS DO ENTENDIMENTO ........................................ 49
PRIMEIRA SEÇÃO - DOS PRINCÍPIOS DE UMA DEDUÇÃO TRANSCENDENTAL EM GERAL................................... 49
Passagem à dedução transcendental das categorias............................................................................................. 52
DEDUÇÃO TRANSCENDENTAL DOS CONCEITOS PUROS INTELECTUAIS ............................................................... 54
A possibilidade de uma síntese em geral.................................................................................................................. 54
Da unidade primitivamente sintética da apercepção ............................................................................................. 54
O princípio da unidade sintética da apercepção é o princípio supremo de todo uso do entendimento ........ 56
Natureza da unidade objetiva da própria consciência........................................................................................... 57
A forma lógica de todos os juízos consiste na unidade objetiva da apercepção dos conceitos que neles se
contêm ............................................................................................................................................................................. 58
Todas as intuições sensíveis são submetidas às categorias como as únicas condições sob as quais o que
existe nelas de diverso pode reunir-se à consciência una..................................................................................... 59
A categoria não tem outro escopo que o conhecimento das coisas na sua aplicação aos objetivos da
experiência ..................................................................................................................................................................... 60
Aplicação das categorias aos objetos dos sentidos em geral............................................................................... 61
Dedução transcendental do uso experimental geralmente possível dos conceitos puros do entendimento . 64
Resultado desta dedução dos conceitos do entendimento ..................................................................................... 66
Resumo Desta Dedução............................................................................................................................................... 67
LIVRO SEGUNDO - ANALÍTICA DOS PRINCÍPIOS.......................................................................................... 68
INTRODUÇÃO - DO JUÍZO TRANSCENDENT AL EM GERAL......................................................................................... 68
CAPÍTULO 1 - DO ESQUEMATISMO DOS CONCEITOS PUROS DO ENTENDIMENTO................... 71
CAPITULO II - SISTEMA DE TODOS OS PRINCÍPIOS DO ENTENDIMENTO PURO ......................... 76
PRIMEIRA SEÇÃO -DO PRIN CÍPIO SUPREMO DE TODOS OS JUÍZOS ANALÍTICOS................................................. 77
SEGUNDA SEÇÃO - DO PRINCÍPIO SUPREMO DE TODOS OS JUÍZOS S INTÉTICOS.................................................. 78
TERCEIRA S EÇÃO - REPRESENTAÇÃO SISTEMÁTICA DE TODOS OS PRINCÍPIOS SINTÉTICOS DO
ENTENDIMENTO PURO...................................................................................................................................................... 80
I — Axiomas da Intuição ............................................................................................................................................ 82
II — Antecipações da Percepção ............................................................................................................................... 84
III — Analogias da Experiência ................................................................................................................................. 88
IV — Postulados do Pensamento Empírico em Geral..........................................................................................106
NOTAS .................................................................................................................................................................................117
INTRODUÇÃO
I — Da Distinção Entre o Conhecimento Puro e o Empírico
Não se pode duvidar de que todos os nossos conhecimentos começam com a
experiência, porque, com efeito, como haveria de exercitar-se a faculdade de se conhecer, se
não fosse pelos objetos que, excitando os nossos sentidos, de uma parte, produzem por si
mesmos representações, e de outra parte, impulsionam a nossa inteligência a compará-los
entre si, a reuni-los ou separá-los, e deste modo à elaboração da matéria informe das
impressões sensíveis para esse conhecimento das coisas que se denomina experiência?
No tempo, pois, nenhum conhecimento precede a experiência, todos começam por ela.
Mas se é verdade que os conhecimentos derivam da experiência, alguns há, no entanto,
que não têm essa origem exclusiva, pois poderemos admitir que o nosso conhecimento
empírico seja um composto daquilo que recebemos das impressões e daquilo que a nossa
faculdade cognoscitiva lhe adiciona (estimulada somente pelas impressões dos sentidos);
aditamento que propria mente não distinguimos senão mediante uma longa prática que nos
habilite a separar esses dois elementos.
Surge desse modo uma questão que não se pode resolver à primeira vista: será possível
um conhecimento independente da experiência e das impressões dos sentidos?
Tais conhecimentos são denominados “a prio ri”, e distintos dos empíricos, cuja origem
e a posteriori”, isto é, da experiência.
Aquela expressão, no entanto, não abrange todo o significado da questão proposta,
porquanto há conhecimentos que derivam indiretamente da experiência, isto é, de uma regra
geral obtida pela experiência, e que no entanto não podem ser ta chados de conhecimentos “a
priori”.
Assim, se alguém escava os alicerces de uma casa, “a priori” poderá esperar que ela
desabe, sem precisar observar a experiência da sua queda, pois, praticamente, já sabe que
todo corpo abandonado no ar sem sustentação cai ao impulso da gravidade. Assim esse
conhecimento é nitidamente empírico.
Consideraremos, portanto, conhecimento “a priori”, todo aquele que seja adquirido
independentemente de qualquer experiência. A ele se opõem os opostos aos empíricos, isto é,
àqueles que só o são “a posteriori”, quer dizer, por meio da experiência.
Entenderemos, pois, daqui por diante, por conhecimento “a priori”, todos aqueles que
são absolutamente independentes da experiência; eles são opostos aos empíricos, isto é,
àqueles que só são possíveis me diante a experiência.
Os conhecimentos “a priori” ainda podem dividir-se em puros e impuros. Denomina-se
conhecimento “a priori” puro ao que carece comple tamente de qualquer empirismo.
Assim, p. ex., “toda mudança tem uma causa”, é um princípio “a priori”, mas impuro,
porque o conceito de mudança só pode formar-se extraído da experiência.
II — Achamo-nos de Posse de Certos Conhecimentos “A Priori” e o Próprio Senso
Comum não os Dispensa
Trata-se agora de descobrir o sinal pelo qual o conhecimento empírico se distingue do
puro. A experiência nos mostra que uma coisa é desta ou daquela maneira, silenciando sobre
a possibilidade de ser diferente.
Digamos, pois, primeiro: se encontramos uma proposição que tem que ser pensada com
caráter de necessidade, tal proposição é um juízo “a priori".
Se, além disso, não é derivada e só se concebe como valendo por si mesma como
necessária, será então absolutamente “a priori”.
Segundo: a experiência não fornece nunca juízos com uma universalidade verdadeira e
rigorosa, mas apenas com uma generalidade suposta e relativa (por indução), o que.
propriamente quer dizer que não se observou até agora uma exceção a determinadas leis. Um
juízo, pois, pensado com rigorosa universalidade, quer dizer, que não admite exceção alguma ,
não se deriva da experiência e sem valor absoluto “a priori”.
Portanto, a universalidade empírica nada mais é do que uma extensão arbitrária de
validade, pois se passa de uma validade que corresponde à maior parte dos casos, ao que
corresponde a todos eles, como p. ex. nesta proposição: “Todos os corpos são pesados.”
Pelo contrário, quando uma rigorosa universalidade é essencial em um juízo, esta
universalidade indica uma fonte especial de conhecimento, quer dizer, uma faculdade de
conhecer “a priori”. A necessidade e a precisa universalidade são os caracteres evidentes de
um conhecimento “a prio ri”, e estão indissoluvelmente unidos. Mas como na prática é mais
fácil mostrar a limitação empírica de um conhecimento do que a contingência nos juízos, e
como também é mais evidente a universalidade ilimitada do que a necessidade absolu ta,
convém servir-se separadamente desses dois critérios, pois cada um é por si mesmo infalivel.
Ora, é fácil demonstrar que no conhecimento humano existem realmente juízos de um
valor necessário, e na mais rigorosa significação universal; por conseguinte, juízos puros, “a
priori”. Se se quer um exemplo da própria ciência, basta reparar em todas as proposições da
Matemática. Se se quer outro tomado do bom senso, pode bastar a proposição de que cada
mudança tem uma causa.
Neste último exemplo, o conceito de causa contém de tal modo o de necessidade de
enlace com um efeito e a rigorosa generalidade da lei, que desapareceria por completo se,
como o fez Hume, quiséssemos derivá-lo da freqüente associação do que segue com o que
precede e do hábito (e por isso de uma necessidade simplesmente subjetiva) de ligar certas
representações.
Também se poderia, sem recorrer a esses exemplos, para provar a existência de
princípios “a priori” em nosso conhecimento, demonstrar que são indispensáveis para a
possibilidade da mesma experiência, sendo portanto uma demonstração “a priori".
Porque, onde basearia a experiência a sua certeza se todas as regras que empregasse
fossem sempre empíricas e contingentes?
Assim, os que possuem esse caráter dificilmente são aceitos como primeiros princípios.
Basta -nos haver manifestado aqui o uso puro de nossa faculdade de conhecer de um
modo efe tivo e os caracteres que lhe são próprios.
Não é só nos juízos, pois também nos conceitos encontramos uma origem “apriorística”
de alguns.
Realmente, subtrai do vosso conceito empírico de um corpo tudo quanto possui de
empírico: a cor, a dureza, a moleza, o peso, e a própria impenetrabilidade, e ficará o espaço
que (ora vazio) ele ocupava e que não pode ser suprimido.
Quando separais de alguns conceitos empíricos de um objeto, corpóreo ou não, todas as
propriedades que a experiência ministra, não podeis no entanto privá-lo daquela, mediante a
qual é pensada como substância, ou aderente a uma substância (se bem que esse conceito de
substância contenha mais determinações que o de um objeto em geral).
Deveis, pois, reconhecer que a necessidade com que este conceito se impõe dá-se em
virtude da sua existência, “a priori” na vossa faculdade de conhecer.
III — A Filosofia Necessita de Uma Ciência que Determine a Possibilidade, os
Princípios e a Extensão de Todos os Conhecimentos “A Priori”
Há uma coisa ainda mais importante que o que precede: certos conhecimentos p or meio
de conceitos, cujos objetos correspondentes não podem ser fornecidos pela experiência,
emancipam-se dela e parece que estendem o círculo de nossos juízos além dos seus limites.
 Precisamente nesses conhecimentos, que transcendem ao mundo sensível, aos quais a
experiência não pode servir de guia nem de retificação, consistem as investigações de nossa
razão, investigações que por sua importância nos parecem superiores, e por seu fim muito
mais sublimes a tudo quanto a experiência pode apreender no mundo dos fenômenos;
investigações tão importantes que, abandoná-las por incapacidade, revela pouco apreço ou
indiferença, razão pela qual tudo intentamos para as fazer, ainda que incidindo em erro.
Esses inevitáveis temas da razão pura são: Deus, liberdade e imortalidade. A ciência
cujo fim e processos tendem à resolução dessas questões denomina-se Metafísica. Sua
marcha, é, no princípio, dogmática; quer dizer, ela enceta confiadamente o seu trabalho sem
ter provas na potência ou impotência de nossa razão para tão grande empresa.
Parecia, no entanto, natural que, ao abandonar o terreno da experiência, não
construíssem imediatamente um edificio com conhecimentos adquiridos sem saber como, ou
sobre o crédito de princípios cuja origem ignoramos. E sem have r assegurado, antes de tudo,
mediante cuidadosas investigações, acerca da solidez do seu fundamento. Pelo menos, antes
de o construir, deveriam ter apresentado estas questões: Como pode a inteligência chegar aos
conhecimentos “a priori”? Que extensão, le gitimidade e valor podem ter?
Com efeito, nada seria mais natural, se esta palavra significa o que conveniente e
racionalmente deve suceder; mas se por ela entendemos o que de ordinário se faz, nada é
mais natural que dar ao olvido essas questões, pois desfrutando de certeza uma parte de
nossos conhecimentos, a Matemática, concebe -se a fagueira esperança de que os demais
cheguem ao mesmo ponto.
Por outra parte, abandonando o círculo da experiência, podem estar seguros de não ser
contra -ditados por ela. O desejo de estender os nossos conhecimentos é tão grande que só
detém seus passos quando tropeça em uma contradição claríssima; mas as ficções do
pensamento, se estão arrumadas com certo cuidado, podem evitar tais tropeços, ainda que
nunca deixem de ser ficções.
As matemáticas fornecem um brilhante exemplo do que poderíamos fazer
independentemente da experiência, nos conhecimentos “a priori”. É verdade que não se
ocupam senão de objetos e conhecimentos que podem ser representados pela intuição; mas
esta circunstância facilmente se pode reparar, porque a intuição de que se trata pode dar-se “a
priori” por si mesma, e por conseguinte, é apenas distinguível de um simples conceito puro.
A propensão a estender os conhecimentos, imbuida com esta prova do poder da razão,
não vê limites para o seu desenvolvimento. A pomba ligeira agitando o ar com seu livre vôo,
cuja resistência nota, poderia imaginar que o seu vôo seria mais fácil no vácuo.
Assim, Platão, abandonando o mundo sensível que encerra a inteligência em limites tão
estreitos, lançou-se nas asas das idéias pelo espaço vazio do entendimento puro, sem advertir
que com os seus esforços nada adiantava, faltando-lhe ponto de apoio onde manter-se e
segurar-se para aplicar forças na esfera própria da inte ligência.
Mas tal é geralmente a marcha da razão humana na especulação; termina o mais breve
possível a sua obra, e não procura, até muito tempo depois, indagar o fundamento em que
repousa.
Uma vez chegado a esse ponto, encontra toda sorte de pretextos para consolar-se dessa
falta de solidez, ou, em último termo, repele voluntaria mente a perigosa e tardia prova. Mas o
que nos livra de todo cuidado e receio durante a construção de nossa obra, e ainda nos engana
por sua aparente solidez, é que uma grande parte, quiçá a maior, do trabalho de nossa razão,
consiste na análise de conceitos que já temos formados sobre os objetos.
 Isso nos dá uma infinidade de conhecimentos que, se bem sejam apenas
esclarecimentos e explicações daquilo que foi pensado em nossos conceitos (ainda que de
maneira confusa), estimam-se, todavia, como novas luzes (Einsicheter), pelo menos, quanto à
sua forma, por mais que não aumentem a matéria nem o conteúdo de nossos conceitos, pois
simplesmente os preparam e ordenam.
Como esse procedimento dá um conhecimento real “a priori” que segue uma marcha
segura e útil, enganada e iludida a razão, sem o notar, entra em afirmações de uma natureza
completa mente distinta e totalmente estranha ao conceito dado “a priori” e sem que saiba
como as conseguiu, nem se lhe ocorra fazer-se semelhante pergunta.
Por isso, pois, tratarei desde o começo da dife rença que existe entre essas duas espécies
de conhecimentos.
IV — Diferença Entre o Juízo Analítico e o Sintético
Em todos os juízos em que se concebe a rela ção de um sujeito com um predicado
(considerando só os juízos afirmativos, pois nos negativos é mais fácil fazer, depois, a
aplicação), esta rela ção é possível de dois modos: ou o predicado B pertence ao sujeito A
como algo nele contido (de um modo tácito), ou B é completamente estranho ao conceito A,
se bem se ache enlaçado com ele.
 No primeiro caso chamo ao juízo analítico, no segundo, sintético. Os juízos analíticos
(afirmativos) são, pois, aqueles em que o enlace do sujeito com o predicado se concebe por
identidade; aqueles, ao contrário, cujo enlace é sem identidade, devem chamar-se juízos
sintéticos. Poder-se-ia também denominar os primeiros de juízos explicativos, e aos
segundos, de juízos extensivos, pelo motivo de que aqueles nada aditam ao sujeito pelo
atributo, apenas decompondo o sujeito em conceitos parciais compreendidos e concebidos
(ainda que tacitamente) no mesmo, enquanto que, pelo contrário, os últimos acrescentam ao
conceito do sujeito um predicado que não era de modo algum pensado naquele e que não se
obteria por nenhuma decomposição.
Quando digo p. ex.: “todos os corpos são extensos”, formulo um juízo analítico, porque
não tenho que sair do conceito de corpo para achar unida a ele a extensão, e só tenho que
decompô-lo, quer dizer, só necessito tornar-me cônscio da diversidade que pensamos sempre
em dito conceito para encontrar o predicado; é portanto um juízo analítico. Pelo contrário,
quando digo: “todos os corpos são pesados”, já o predicado é algo comple tamente distinto do
que em geral penso no simples conceito de corpo. A adição de tal atributo dá, pois, um juízo
sintético.
Os juízos da experiência, como tais, são todos sintéticos.
Porque seria absurdo fundar um juízo analítico na experiência, pois para formá-lo não
preciso sair do meu conceito e por conseguinte não me é necessário o testemunho da
experiência. P. ex.: “um corpo é extenso” é uma proposição “a priori” e não um juízo da
experiência porque antes de dirigir-me à experiência, tenho já em meu conceito todas as
condições do juízo; só me resta, segundo o princípio de contradição, tirar o predicado do
sujeito e ao mesmo tempo chegar a ter consciência da necessidade do juízo, necessidade que
jamais a experiência poderá subministrar-me.
Pelo contrário, embora eu não tire do conceito de corpo em geral o predicado pesado,
indica, sem embargo, aquele conceito um objetivo da expe riência, uma parte da experiência
total, à qual posso ainda aditar outra parte da mesma como pertencente a ela.
Posso reconhecer antes, analiticamente, o conceito de corpo pelas propriedades da
extensão, impenetrabilidade, forma etc., etc., as quais são todas pensadas neste conceito. Mas
se amplio meu conhecimento e observo a experiência que me proporcionou o conceito de
corpo, encontro enla çada constantemente com todas as anteriores propriedades e de
gravidade (o peso), que adito sinte ticamente, como predicado, àquele conceito.
V — Os Juízos Matemáticos São Todos Sintéticos
Esta proposição parece ter escapado até hoje às indagaçõe s dos que analisam a razão
humana, e quase estão opostas às suas conjeturas, apesar da sua incontrovertível certeza e da
suma importância de suas conseqüências.
Como se observa que os raciocínios dos mate máticos procediam todos dos princípios
de contradição (exigido pela natureza de toda certeza apodítica), acreditava -se também que os
princípios tinham sido reconhecidos em virtude do mesmo processo: no que se enganaram,
porque se indubitavelmente uma proposição sintética pode ser conhecida segundo o princípio
de contradição, isto não é possível dentro de si mesma, senão supondo outra proposição
sintética de que possa ser deduzida.
Deve notar-se, antes de tudo, que as proposições propriamente matemáticas são sempre
juízos “a priori” e não juízos empíricos, porque implicam necessidade, que não se pode obter
pela experiência.
Mas, se não se quer conceder isto, limito minha proposição às matemáticas puras, cujo
conceito traz consigo o não conter conhecimentos empíricos, mas tão-somente “a priori”.
I — Poder-se-ia em verdade crer, à primeira vista, que a proposição 7 + 5 = 12 é
puramente analítica, resultante, segundo o princípio de contradição, do conceito de uma soma
de sete e cinco. Mas se a considerarmos com mais atenção, acharemos que o conceito de
soma de sete e cinco não contém mais do que a união dos dois números em um só, o que não
faz pensar qual seja esse número único que compreenda aos outros dois. O conceito de 12
não é de modo algum percebido só pelo pensamento da união de cinco e sete, e posso
decompor todo meu conceito dessa soma tanto quanto quiser, sem que por isso encontre o
número 12.
É preciso, pois, ultrapassar esse conceito recorrendo-se à intuição correspondente a um
dos dois números, quiçá aos 5 dedos da mão ou a cinco pontos (como faz Segner em sua
Aritmética), e aditar sucessivamente ao conceito sete as cinco unidades dadas na intuição.
Com efeito, tomo primeiramente o número sete, e auxiliando-me de meus dedos como
intuição para o conceito de 5, acrescento sucessivamente ao número 7 as unidades que tive de
reunir para formar o 5, e assim vejo surgir o número 12.
Pela adição de sete e cinco tenho idéia desta soma 7 + 5, é verdade; mas não que esta
seja igual ao número 12. A proposição aritmética é, pois, sempre sintética: o que se
compreende ainda mais claramente se se tomam números maiores, pois então é evidente que,
por mais que volvamos e coloquemos nosso conceito quanto quisermos, nunca poderemos
achar a soma mediante a simples decomposição de nossos conceitos e sem o auxilio da
intuição.
Tampouco é analítico um princípio qualquer de Geometria pura.
É uma proposição sintética que a linha reta, entre dois pontos é a mais curta, porque
meu conceito de reta não contém nada que seja quantida de, senão só qualidade.
O conceito de mais curta é completamente aditado e não pode provir de modo algum da
decomposição do conceito de linha reta. É preciso, pois, recorrer-se aqui à intuição, único
modo para que seja possível a síntese.
Algumas poucas proposições fundamentais, que os geômetras pressupõem, são
realmente analíticas e se apóiam no princípio de contradição; mas também é verdade que só
servem, como proposições idênticas, ao encadeamento do método e não como princípios, tais
como, p. ex., a = a, o todo é igual a si mesmo: ou (a + b) < “a”, o todo é maior do que a parte.
E, sem embargo, estes mesmos axiomas ainda que valham como simples conceitos, são
admitidos nas matemáticas somente porque podem ser representados em intuição.
A ambigüidade de expressão é que geralmente nos faz crer que o predicado de tais
juízos apodíticos existe já em nossos conceitos, e que, conseguintemente, é analítico o juízo.
A um conceito dado temos que aditar certo predicado, e esta necessidade pertence já
aos conceitos. Mas a questão não é o que devemos aditar com o pensamento a um conceito
dado, senão o que realmente pensamos nele, ainda que de um modo obscuro.
Vemos, pois, que o predicado se une necessariamente ao conceito, não como concebido
nele, senão mediante uma intuição que a ele deve unir-se.
II — A ciência da natureza (Física) contém como princípios, juízos sintéticos “a priori”.
Só tomarei como exemplos estas duas proposições: em todas as mudanças do mundo
corpóreo a quanfidade de matéria permanece sempre a mesma, ou, em todas as comunicações
de movimento a ação e reação devem ser sempre iguais.
Em ambos vemos, não só a necessidade e, por conseguinte, sua origem “a priori”, senão
que são proposições sintéticas.
Porque no conceito de matéria não penso em sua permanência, mas unicamente em sua
presença no espaço que ocupa, e, portanto, vou além do conceito de matéria para atribuir-lhe
algo “a priori” que não havia concebido nele.
A proposição não é, pois, concebida analítica, senão sinteticamente ainda que “a
priori”, e assim sucede com as restantes proposições da parte pura da Física.
III — Também devem haver conhecimentos sintéticos “a priori” na Metafísica, ainda
que só a consideraremos como uma ciência em ensaio; mas que, não obstante, torna
indispensável a natureza da razão humana.
A Metafísica não se ocupa unicamente em analisar os conceitos das coisas que nós
formamos a priori”, e, por conseguinte, em explicações ana líticas, senão que por ela
queremos estender nossos conhecimentos “a priori”, e para o efeito nos valemos de princípios
que aos conceitos dados aditam algo que não estava compreendido neles, e mediante os
juízos sintéticos “a priori” nos afastamos tanto, que a experiência não pode seguir-nos, p. ex.,
na proposição: o mundo deve ter um primeiro princípio etc., etc.
Assim, pois, a Metafísica consiste, pelo menos segundo seu fim, em proposições
puramente sintéticas “a priori”.
VI — Problema Geral da Razão Pura
Muito se adiantou com haver podido trazer à forma de um só problema uma infinidade
de questões: Com isso, não só se facilita o próprio trabalho determinando-o com precisão,
como também se facilita o exame para outro que queira verificar se cumprimos ou não o
nosso desígnio. O verdadeiro problema da razão pura contém-se nesta pergunta: como são
possíveis os juízos sintéticos “a priori"? Se a Metafísica permaneceu até agora em um estado
vago de incerteza e contradição, deve atribuir-se unicamente a que esse problema assim como
também a diferença entre o juízo analítico e o sintético, não se tinham apresentado antes ao
pensamento.
A vida ou morte da Metafísica depende da solução desse problema, ou da demonstração
de que é impossível resolvê-lo. David Hume é, de todos os filósofos, o que mais se
aproximou desse proble ma, mas esteve longe de o determinar suficientemente e não o pensou
em toda a sua originalidade; detendo-se só ante o princípio sintético da relação de causa e
efeito (“principium causalitatis”), acreditou poder deduzir que o tal princípio é absolutamente
impossível “a priori”, e, segundo as suas conclusões, tudo o que denominamos Metafísica
descansaria sobre uma simples opinião de um pre tendido conhecimento racional, que no fato
nasce simplesmente da experiência e que recebe, do hábito, certo aspecto de necessidade.
Esta afirmação, destruidora de toda a Filosofia pura, não seria nunca emitida, caso o seu
autor houvesse abordado em toda a sua generalidade esse problema, porque então teria
compreendido que, segundo o seu argumento, tampouco pode riam existir as matemáticas
puras, pois elas contêm certamente princípios sintéticos “a priori”, e seu bom senso teria
retrocedido ante semelhante asserto.
Na resolução do precedente problema está também compreendida ao mesmo tempo a
possibilidade do emprego da razão pura na fundação e construção de todas as ciências que
contêm um conhecimento teórico “a priori” dos objetos, quer dizer, está contida a resposta
destas perguntas:
Como é possível uma Matemática pura?
Como é possível uma Física pura?
Não se pode perguntar destas ciências, mais do que como são possíveis porque, ao
existirem como reais, demonstram pois que o são.
No tocante à Metafísica, como seus passos têm sido até hoje tão desditosos, tão
distantes do fim essencial da mesma, que pode dizer-se que todos têm sido em vão,
perfeitamente explica-se a dúvida de sua possibilidade e de sua existência.
Mas, todavia, esta espécie de conhecimento deve, em certo sentido, considerar-se como
dado; e a Metafísica é real, senão como ciência feita, pelo menos em sua disposição natural
(Metaphisica naturalis), porque a razão humana, sem que esteja movida por uma vaidade de
uma onisciência; senão simplesmente estimulada por uma necessidade própria, marcha sem
descanso algum para questões que não podem ser resolvidas pelo uso empírico da razão, nem
por princípios que dela emanem. Isso sucede realmente a todos os homens, logo que a sua
razão começa a especular; por isso a Metafísica existiu sempre e existirá onde esteja o
homem. De tal modo a nossa questão é agora: como é possível a Metafísica como disposição
natural? Quer dizer: como nascem da natureza da razão humana universal essas questões, que
a razão pura formula e que por necessidade própria se sente impulsionada a resolver?
Mas como todos os ensaios feitos até hoje para resolver essas questões naturais (por
exemplo: a de saber se o mundo teve princípio, ou se é eterno etc.) têm encontrado
contradições inevitáveis, não podemos contentar-nos com a simples disposição natural para a
Metafísica, quer dizer, com a faculdade da razão pura, de que procede uma Metafísica,
qualquer que seja; senão que deve ser possível chegar com ela a uma certeza ou ignorância
dos objetos e poder afirmar algo sobre os objetos dessas questões ou sobre a potência da
razão, e, por conseguinte, a estender com confiança seu poder ou colocá-la em limites
seguros e determinados. Esta última questão, que resulta do problema geral que precede, se
expressa nos seguintes termos: de que modo é possível a Metafísica como ciência?
A crítica da razão conduz, por fim, necessariamente, à ciência; o uso dogmático da
razão sem crítica conduz, pelo contrário, a afirmações infundadas, que sempre podem ser
contraditadas por outras não menos verossímeis, o que conduz ao ceticismo.
Nem tampouco pode essa ciência ter uma extensão excessiva, porque não se ocupa dos
objetos da razão, cuja diversidade é infinita, mas simplesmente da razão mesma, de
problemas que nascem exclusivamente do seu seio e que se lhe apresentam, não pela natureza
das coisas que diferem dela, senão pela sua própria.
Mas uma vez que conheça perfeitamente a sua própria faculdade em relação com os
objetos que pode fornecer-lhe a experiência, ser-lhe-á fácil determinar com toda segurança a
exatidão a extensão e limites de seu exercício, intentado fora dos limites da experiência.
Pode-se e deve-se, portanto, considerar como ineficaz todo ensaio feito até aqui para
construir uma metafísica dogmática, porque o que neles existe de analítico, a saber: a simples
decomposição dos conceitos que “a priori” se encontram em nossa razão, não é seu fim total,
senão somente um meio preliminar da Metafísica, cujo objeto é estender nossos
conhecimentos científicos “a prio ri".
A análise é incapaz de realizar isto, pois se reduz a mostrar o que se acha contido em
ditos conceitos, e não diz como foi adquirido “a priori”, para poder depois determinar o seu
legítimo emprego nos objetos de todos os nossos conhecimentos em geral.
Não se necessita grande abnegação para renunciar a todas essas pretensões, posto que
as evidentes e inevitáveis contradições da razão consigo mesma no processo dogmático,
causaram por largo tempo o descrédito da Metafísica.
Por isso será mister muita firmeza para que a dificuldade intrínseca e a oposição
externa não nos afastem de uma ciência tão indispensável à razão humana, cuja raiz não
poderia estragar-se ainda que se cortassem todos os seus ramos exte riores, e que, mediante
um método diferente e oposto ao que até hoje tem sido empregado, pode adquirir um útil e
fecundo desenvolvimento.
VII — Idéia e Divisão de Uma Ciência Particular sob o Nome de CRÍTICA DA
RAZÃO PURA
De tudo o que precede resulta, pois, a idéia de uma ciência particular que pode chamarse “crítica da razão pura”, por ser a razão a faculdade que proporciona os princípios do
conhecimento “a priori”.
Razão pura é, por isso, a que contém os prin cípios para conhecer algo absolutamente “a
priori”. Um orgânon da razão pura seria o conjunto de princípios mediante os quais todos os
conhecimentos “a priori” poderiam ser adquiridos e realmente estabelecidos. A aplicação
extensa de tal orgânon produzida um sistema da razão pura. Mas como isto seria exigir
demasiado e como fica ainda por saber se a extensão de nossos conhecimentos é possível, e
em que casos, podemos considerar a ciência do simples juízo da razão pura, de suas partes e
limites, como a propedêutica para o sistema de razão pura.
Uma tal ciência não deveria denominar-se doutrina, mas somente “crítica da razão pura:
sua utilidade, desde o ponto de vista especulativo, seria puramente negativa e não servida
para ampliar nossa razão, senão para a emancipar de todo erro, o que já não é pouco.
Chamo transcendental todo conhecimento que em geral se ocupe, não dos objetos, mas
da ma neira que temos de conhecê-los, tanto quanto possível “a priori”. Um sistema de tais
conceitos se denominada “Filosofia transcendental”. Mas esta filosofia é demasiada para
começar, porque deve conter todo o conhecimento, tanto o analítico como o sintético “a
priori”, e se estenderia muito além do que corresponde ao nosso plano.
Devemos tratar somente da análise quanto seja indispensável e necessária para perceber
em toda a sua extensão os princípios da síntese a priori. Síntese que constitui o nosso único
objeto (assunto). Esta investigação, que não podemos chamar propriamente doutrina, mas
tão-só “crítica transcendental”, pois tem por fim não o aumento dos nossos conhecimentos,
mas a retificação dos mesmos, vem a ser como a pedra de toque para estimar o valor ou a
insignificância de todos os conhecimentos “a priori”, que é do que nos ocupamos atualmente.
A crítica é, portanto, no possível, uma preparação para um orgânon, e se este não se
distingue, será pelo menos um cânon, segundo o qual possa em todo caso ser exposto
analítica e sinteticamente o sistema completo da filosofia da razão pura, que deve consistir na
extensão ou na simples limitação do conhecimento racional.
Se se atende a que dito sistema tem por obje to, não a natureza das coisas, que é infinita,
mas o entendimento que julga sobre a natureza das coisas, e ainda esse entendimento
considerado somente em relação aos seus conhecimentos “a priori” , podemos presumir que o
sistema não é impossível, nem tão vasto, que se não possa esperar o seu termo.
Como não necessitamos procurar esse objeto exteriormente nem pode permanecer
oculto para nós, não parece que tenha de ser tão extenso que não possamos abarcá-lo em seu
justo preço. Menos ainda deve esperar-se que esta obra seja uma crítica dos livros publicados
sobre sistemas da razão pura; aqui só se trata de uma crítica da faculdade da razão pura.
Somente tomando essa crítica como base, se consegue uma segura pedra de toque para
apreciar o valor das obras filosóficas antigas e modernas; sem ela, o historiador e o juiz
condenam in competentemente as asserções de outros, tendo-as como infundadas em nome
das próprias, que não têm melhor fundamento.
A filosofia transcendental é a idéia de uma ciência, cujo plano deve traçar a crítica da
razão pura de uma maneira arquitetônica, quer dizer, por princípios e com a mais plena
segurança da perfeição e validez de todos os princípios da razão pura.
Se a crítica não toma o nome de Filosofia transcendental é só porque deveria, para ser
um sistema completo, conter uma análise detalhada de todos os conhecimentos humanos “a
priori”. A crítica deve, sem dúvida alguma, colocar ante nossos olhos uma perfeita
enumeração de todos os conceitos fundamentais que constituem o conhe cimento puro; mas se
abstém da detalhada análise deles, em parte, porque essa decomposição não seria conforme
com seu fim, e, ademais, não apresenta tanta dificuldade como a síntese, que é objeto da
crítica e, em parte, também, porque seria contrário à unidade do plano entreter-se numa
análise e derivação tão acabados, podendo eximir-se de tal empenho.
Demais, assim a análise perfeita dos conceitos “a priori”, como a dedução dos que
depois hão de ser derivados, é coisa fácil de suprir sempre que antes tenham sido expostos
detalhadamente como princípios da síntese e nada lhes falta em relação a esse fim essencial.
Segundo isto, tudo o que constitui a Filosofia transcendental pertence à crítica da razão
pura, que é a idéia completa da Filosofia transcendental; mas não esta ciência mesma, porque
na análise só se estende até o que lhe é indispensável para o perfeito juízo do conhecimento
sintético “a priori”.
O principal propósito que deve guiar-nos na divisão desta ciência é não introduzir
conceitos que contenham algo de empírico, quer dizer, que o conhecimento “a priori” seja
completamente puro.
Daqui, que, ainda que os princípios superiores de Moral e seus conceitos fundamentais
sejam conhecimentos “a priori”, não pertençam sem embargo à Filosofia transcendental;
porque os conceitos de prazer ou dor, de desejo ou inclinação têm todos uma origem
empírica, e ainda que seja certo que não fundamentam os preceitos morais, devem, sem
embargo, formar parte da moralidade pura, juntamente com o conceito do dever de dominar
os obstáculos ou dos impulsos a que não devemos entregar-nos.
Donde se segue que a Filosofia transcendental é a filosofia da razão pura simplesmente
especula tiva, porque todo o concernente à prática, que contém móveis, refere-se aos
sentimentos que pertencem às fontes empíricas do conhecimento.
Se se quer fazer a divisão dessa ciência desde o ponto de vista geral de um sistema,
deve ela compreender:
1.º — uma teoria elementar da razão pura;
2.° — uma teoria do método da razão pura.
Cada uma destas partes principais terá suas sub-divisões cujos fundamentos não
poderão ser facilmente expostos aqui. O que parece necessário re cordar na introdução é que o
conhecimento humano tem duas origens e que talvez ambas procedam de uma comum raiz
desconhecida para nós; estas são: a sensibilidade e o entendimento; pela primeira os objetos
nos são dados, e pelo segundo, concebidos.
A sensibilidade pertence à Filosofia transcendental enquanto contém representações “a
priori”, que por seu turno encerram as condições mediante as quais nos são dados os objetos.
A teoria transcendental da sensibilidade deve pertencer à primeira parte da ciência elementar,
pois as condições sob as quais se dão os objetos ao conhecimento humano precedem àquelas
sob as quais são concebidos esses mesmos objetos.
PARTE PRIMEIRA
DA TEORIA ELEMENTAR TRANSCENDENTAL
Estética Transcendental
1
Qualquer que seja o modo de como um conhecimento possa relacionar-se com os
objetos, aquele em que essa relação é imediata e que serve de meio a todo pensamento,
chama -se intuição (Ansechauung).(1) Mas esta intuição não tem lugar senão sob a condição
de nos ser dado o objeto, e isto só é possível, para o homem, modificando o nosso espírito de
certa maneira.
A capacidade de receber (a receptividade) representações dos objetos segundo a
maneira como eles nos afetam, denomina -se sensibilidade. Os objetos nos são dados
mediante a sensibilidade e somente ela é que nos fornece intuições; mas é pelo entendimento
que elas são pensadas, sendo dele que surgem os conceitos. Todo pensamento deve em última
análise, seja direta ou indiretamente, mediante certos caracteres, referir-se às intuições, e,
conseguintemente, à sensibilidade, porque de outro modo nenhum objeto nos pode ser dado.
A impressão de um objeto sobre esta capacidade de representações, enquanto somos
por ele afetados, é a sensação. Chama -se empírica toda intuição que relaciona ao objeto, por
meio da sensação. O objeto indeterminado de uma intuição empírica, denomina-se fenômeno.
No fenômeno chamo matéria àquilo que corresponde à sensação; aquilo pelo qual o que ele
tem de diverso pode ser ordenado em determinadas relações, denomino “forma do
fenômeno”. Como aquilo mediante o qual as sensações se ordenam e são suscetíveis de
adquirir certa forma não pode ser a sensação, infere-se que a matéria dos fenômenos só nos
pode ser fornecida “a posteriori”, e que a forma dos mesmos deve achar-se já preparada “a
priori” no espírito para todos em geral, e que por conseguinte pode ser considerada
independentemente da sensação.
Toda a representação na qual não há traço daquilo que pertence à sensação chamo pura
(em sentido transcendental). A forma pura das intuições sensíveis em geral, na qual todo o
diverso dos fenômenos é percebido pela intuição sob certas relações, encontra-se “a priori”
no espírito. Esta forma pura da sensibilidade pode ainda ser desig nada sob o nome de intuição
pura. Assim, quando na representação de um corpo eu me abstraio daquilo que a inteligência
pensa, como substância, força, divisibilidade etc., bem como daquilo que pertence à sensação,
como a impenetrabiidade, a dureza, a cor etc., ainda me resta alguma coisa desta intuição
empírica, a saber: a extensão e a figura. Estas pertencem à intuição pura, que tem lugar “a
priori” no espírito, como uma forma pura da sensibilidade e sem um objeto real do sentido ou
sensação.
 Denomino Estética transcendental (2) à ciência de todos os princípios “a priori” da
sensibilidade. É pois esta ciência que deve constituir a primeira parte da teoria transcendental
dos elementos, por oposição àquela que contém os princípios do pensamento puro e que se
denominará Lógica trans cendental.
 Na Estética transcendental, nós começaremos por isolar a sensibilidade, fazendo
abstração de tudo quanto o entendimento aí acrescenta e pensa por seus conceitos, de tal sorte
que só fique a in tuição empírica. Em segundo lugar, separaremos, também, da intuição tudo o
que pertence à sensação, com o fim de ficarmos só com a intuição pura e com a forma do
fenômeno, que é a única coisa que a sensibilidade nos pode dar “a priori”. Resultará desta
pesquisa que existem duas formas puras da intuição sensível, como princípios do
conhecimento “a priori”, a saber: o espaço e o tempo, de cujo exame vamos agora ocuparnos.
Primeira Seção
Da Estética Transcendental do Espaço
2
Exposição metafísica deste conceito
Por meio dessa proprie dade de nosso espírito que é o sentido externo, nós nos
representamos os objetos como estando fora de nós e colocados todos no espaço. É lá que sua
figura, sua grandeza e suas relações recíprocas são determinadas ou de termináveis. O sentido
interno, por meio do qual o espírito se percebe a si mesmo intuitivamente, ou percebe o seu
estado interior, não nos dá, sem dúvida, nenhuma intuição da alma, ela mesma como objeto;
mas há todavia uma forma determinada pela qual é possível a intuição do seu estado inte rno,
e segundo a qual tudo que pertence às suas determinações internas é representado segundo
relações de tempo. O tempo não pode ser percebido exteriormente, assim como o espaço não
pode ser considerado como algo interior em nós outros. Que são, pois, tempo e espaço? São
entidades reais ou são somente determinações ou mesmo simples relações das coisas? E essas
relações seriam de tal natureza que eles não cessariam de subsistir entre as coisas, mesmo
quando não fossem percebidos como objetos de intuição?
Ou são tais que só pertencem à forma da in tuição, e, por conseguinte, à qualidade
subjetiva de nosso espírito, sem a qual esses predicados ja mais poderiam ser atribuidos a
coisa alguma?
Para obter uma resposta exporemos primeiramente o conceito de espaço. Entendo por
exposição a clara representação (ainda que não seja extensa) do que pertence a um conceito; a
exposição é metafísica quando contém o que o conceito apresenta como dado “a priori”.
1.° — O espaço não é um conceito empírico, derivado de experiências exteriores. Com
efeito, para que eu possa referir certas sensações a qualquer coisa de exterior a mim (quer
dizer, a qualquer coisa colocada em outro lugar do espaço diverso do que ocupo), e, para que
possa representar as coisas como de fora e ao lado umas das outras, e por conseguinte como
não sendo somente diferentes, mas colocadas em lugares diferentes, deve existir já em
princípio a representação do espaço. Esta representação não pode, pois, nascer por
experiência das relações dos fenômenos exteriores, sendo que estas só são possíveis mediante
a sua prévia existência.
2.° — O espaço é uma representação necessária, “a priori”, que serve de fundamento a
todas as intuições externas. É impossível conceber que não exista espaço, ainda que se possa
pensar que nele não exista nenhum objeto. Ele é considerado como a condição da
possibilidade dos fenômenos, e não como uma representação deles dependente; e é uma
representação “a priori”, que é o fundamento dos fenômenos externos.
3.° — O espaço não é um conceito discursivo, ou, como se diz, universal das relações
das coisas em geral, mas uma instituição pura. Com efeito, não se pode representar mais que
um só espaço, e quando se fala de muitos, entende-se somente que se refere às partes do
mesmo espaço único e universal. Estas partes só se concebem no espaço uno e
onicompreensivo, sem que pudessem precedê-lo como se fossem seus elementos (cuja
composição fora possível em um todo). O espaço é essencialmente uno; a variedade que nele
achamos, e, conseqüentemente, o conceito universal de espaço em geral, fundam-se
unicamente em limitações. Daqui se segue que o que serve de base a todos os conceitos que
temos do espaço, é uma intuição “a priori” (que não é empírica). O mesmo acontece cóm os
princípios geométricos, como quando dizemos, por exemplo, que a soma de dois lados de um
triángulo é maior do que o terceiro, cuja certeza apodítica não procede dos conceitos gerais
de linha e triângulo, mas de uma intuição “a priori”.
4.° — O espaço é representado como uma grandeza infinita dada. É necessário
considerar todo conceito como uma representação contida em uma multidão infinita de
representações distintas (das quais é expressão comum); mas nenhum conceito como tal
contém em si uma multidão infinita de representações. Sem embargo, assim concebemos o
espaço (pois todas as suas partes coexistem no infinito). A primitiva representação do espaço
é, pois, uma intuição “a priori” e não um conceito.
Exposição Transcendental do Conceito de Espaço
3
Entendo por exposição transcendental a aplicação de um conceito, como princípio que
pode mostrar a possibilidade de outros conhecimentos sintéticos “a priori”. Ora, isso supôe
duas coisas:
1 — que realmente emanem do conceito dado tais conhecimentos;
2 — que esses conhecimentos não sejam possíveis senão sob a suposição de um modo
de explicação dado e tirado desse conceito.
A Geometria é uma ciência que determina sin teticamente, e, portanto, “a priori”, as
propriedades do espaço. Que deve ser, pois, a representação do espaço, para que tal
conhecimento seja possível? Deve ser, primeiramente, uma intuição; porque é impossível
tirar de um simples conceito proposições que o ultrapassem, como se verifica em Geometria
(Int. V).
Mas essa intuição deve achar-se em nós, “a priori”, quer dizer, anteriormente a toda
percepção de um objeto, e, por conseguinte, ser pura e não empírica.
Efetivamente, as proposições geométricas, como esta por exemplo: o espaço não tem
mais que três dimensões, são todas apodíticas, quer dizer que elas implicam a consciência de
sua necessidade; mas tais proposições não podem ser julgamentos empíricos ou de
experiência, nem deles derivar (Introdução, II).
Como se encontra, pois, no espírito, uma in tuição externa anterior aos mesmos objetos
e na qual o conceito desses objetos pode ser determinado “a priori”? Isso só pode acontecer
sob a condição de que ela tenha sua sede no sujeito, com a capacidade formal que ele tem de
ser afetado por objetos e de receber assim uma representação imediata, quer diz er, uma
intuição, por conseguinte como forma do sentido exterior em geral.
Nossa explicação é a única que torna compreensível a possibilidade da Geometria como
ciência sintética. Toda explicação que não oferece essa vantagem pode ser por esse sinal
distinguida da nossa, por maior semelhança que com ela apresente.
Consequências dos conceitos precedentes
a) O espaço não representa nenhuma proprie dade das coisas, já consideradas em si
mesmas, ou em suas relações entre si, quer dizer, nenhuma determinação que dependa dos
objetos mesmos e que permaneça neles se se faz abstração de todas as condições subjetivas
da intuição; porque nem as determinações absolutas, nem as relativas podem ser percebidas
antes da existência das coisas a que pertencem, e por conseguinte “a priori”.
b) O espaço não é mais do que a forma dos fenômenos dos sentidos externos, quer
dizer, a única condição subjetiva da sensibilidade, me diante a qual nos é possível a intuição
externa. E como a propriedade do sujeito de ser afetado pelas coisas precede necessariamente
a todas as intuições das mesmas, compreende-se facilmente que a forma de todos os
fenômenos pode achar-se dada no espírito antes de toda percepção real, e, consequentemente,
“a priori”. Mas como seja uma in tuição pura onde todos os objetos devem ser de terminados,
ela pode conter anteriormente a toda experiência os princípios de suas relações.
Não podemos, pois, falar de espaço, de seres extensos etc., senão debaixo do ponto de
vista do homem. Nada significa a representação do espaço, se saímos da condição subjetiva,
única sob a qual podemos receber a intuição externa, quer dizer, ser afetados pelos objetos.
Este predicado só convém às coisas, enquanto elas nos aparecem a nós, quer dizer,
enquanto são objetos da sensibilidade . A forma constante desta receptividade, que
denominamos sensibilidade, é a condição necessária de todas as relações, em que os objetos
são intuídos como exteriores a nós outros; e se dita forma for abstraída dos objetos é então
uma intuição pura, que toma o nome de Espaço.
Como as condições particulares da sensibilidade não são as condições da possibilidade
das coisas mesmas, senão somente as de seus fenômenos, bem podemos dizer que o espaço
compreende todas as coisas que nos aparecem exteriormente; mas não todas as coisas em si
mesmas, quer sejam ou não percebidas e qualquer que seja o sujeito que as perceba; porque
de modo algum poderemos julgar as intuições dos outros seres pensantes, nem saber se se
acham sujeitas às mesmas condições que limitam as nossas intuições, e que têm para nós um
valor universal.
Se acrescentamos ao conceito do sujeito a limitação de um juízo, então nosso juízo tem
um valor absoluto ou incondicionado. Esta proposição: todas as coisas estão justapostas no
espaço, vale sob esta restrição: desde que tais coisas sejam tomadas como objetos da nossa
intuição sensível; se eu adito a condição ao conceito e digo: todas as coisas, como fenômenos
externos, estão justapostas no espaço, essa regra valerá universalmente e sem restriç ão
alguma.
Nosso exame do espaço mostra-nos a sua realidade, quer dizer, o seu valor objetivo
relativamente a tudo aquilo que se pode apresentar-nos como objeto; mas ao mesmo tempo,
também, a idealidade do espaço relativamente às coisas consideradas em si mesmas pela
razão, quer dizer, sem atender à natureza de nossa sensibilidade.
Afirmamos, pois, a realidade empírica do espaço em relação a toda experiência externa
possível; mas reconhecemos também a idealidade transcendente do mesmo, quer dizer, a sua
não existência, desde o momento em que abandonamos as condições de possibilidade de toda
experiência e cremos seja ele algo que serve de fundamento às coisas em si.
Excetuando o espaço, não existe nenhuma representação subjetiva que se refira a
qualquer coisa de externo, e que possa dizer-se objetiva “a priori”, porque de nenhuma delas
podem derivar-se proposições sintéticas “a priori”, como aquelas que derivam da intuição no
espaço. Para falar exatamente, nenhuma idealidade lhes corresponde, ainda que tenham em
comum com o espaço a sua dependência unicamente da constituição subjetiva da
sensibilidade, por exemplo: da vista, do ouvido, do tato; mas as sensações de cores, dos sons,
do calor, sendo puras sensações e não intuições, não nos fazem por si mesmas qualquer
objeto, pelo menos “a priori”.
O fim desta observação é somente impedir que se explique a idealidade atribuida ao
espaço por exemplos inadequados, como as cores, o sabor etc., que se considera, com razão,
não como propriedade das coisas, mas sim como modificações do indivíduo, e que podem ser
muito diferentes, como o são os indivíduos.
Neste último caso, com efeito, aquilo que não é originariamente senão um fenômeno,
por exemplo, uma rosa tem, no sentido empírico, o valor de uma coisa em si, se bem que,
quanto à cor, possa a parecer diferente aos diferentes olhos. Pelo contrário, o conceito
transcendental dos fenômenos no espaço nos sugere esta observação crítica, de que em geral
nada do que é intuído no espaço, é coisa em si; e, ainda, que o espaço não é uma forma das
coisas consideradas em si mesmas, mas que os objetos não nos são conhecidos em si mesmos
e aquilo que denominamos objetos exteriores consiste em simples representações de nossa
sensibilidade cuja forma é o espaço, mas cujo verdadeiro correlativo, a coisa em si,
permanece desconhe cida e incognoscível, jamais sendo indagada da experiência.
Segunda Seção
Da Estética Transcendental do Tempo
4
Exposição metafísica do conceito de tempo
1.° O tempo não é um conceito empírico derivado de experiência alguma, porque a
simultaneidade ou a sucessão não seriam percebidas se a representação “a priori” do tempo
não lhes servisse de fundamento. Só sob esta suposição podemos representar-nos que uma
coisa seja ao mesmo tempo que outra (simultânea), ou em tempo dife rente (sucessiva).
2.° O tempo é uma representação necessária que serve de base a todas as intuições. Não
se pode suprimir o tempo nos fenômenos em geral, ainda que se possa separar, muito bem,
estes da quele. O tempo, pois, é dado “a priori”. Só nele é possível toda realidade dos
fenômenos. Estes podem todos desaparecer; mas o tempo mesmo, como condição geral de
sua possibilidade, não pode ser suprimido.
3.° Nesta necessidade “a priori” se funda também a possibilidade dos princípios
apodíticos, das relações ou axiomas do tempo em geral, tais como o tempo não mais que uma
dimensão; os diferentes tempos não são simultâneos, mas sucessivos (enquanto que espaços
diferentes não são sucessivos mas sim simultâneos). Estes princípio s não são deduzidos da
experiência, porque esta não pode dar uma estrita universalidade nem uma certeza apodítica.
Poderíamos dizer: assim o ensina a observa ção geral; e não: isto deve ser assim. Estes
princípios têm, pois valor como regras, que tornam a experiência possível em geral, pois são
elas que nos proporcionam o conhecimento da experiência.
4.° O tempo não é nenhum conceito discursivo ou, como se diz, geral, mas uma forma
pura da intuição sensível. Tempos diferentes não são senão partes de um mesmo tempo. Ora,
uma representação que só pode ser dada por um objeto único, é uma intuição.
Assim a proposição: tempos diferentes não podem ser simultâneos, não se deriva de um
conceito geral. Ela é uma proposição sintética que não pode derivar somente de conceitos.
Acha-se pois contida imediatamente na intuição e representação do tempo.
5.° A natureza infinita do tempo significa que toda quantidade determinada de tempo é
somente possível pelas limitações de um único tempo que lhes serve de fundamento.
Portanto, a representa ção primitiva do tempo deve ser dada como ilimitada. Ora, quando as
partes mesmas e quantidades todas de um objeto só podem ser representa das e determinadas
por meio de uma limitação, então a representação toda desse objeto não pode ser dada por
conceitos (porque estes só contém re presentações parciais) devendo ter como fundamento
uma intuição parcial.
5
Exposição transcendental do conceito de tempo
Para explicar este ponto, posso reportar-me ao número 3 precedente, onde, para ser
breve, coloquei o que propriamente é transcendental, sob o titulo de exposição metafísica.
Aqui somente acrescento que os conceitos de mudança e de movimento (como mudança de
lugar), só são possíveis por e na representação do tempo, e que se essa representação não
fosse uma intuição (interna) “a priori”, não houve a possibilidade de uma mudança, quer
dizer, a possibilidade de união de predicados opostos contraditoriamente em um só e mesmo
objeto (por exemplo, que uma mesma coisa esteja e não esteja em um lugar).
Somente no tempo podem encontrar-se essas duas determinações contraditoriamente
opostas em uma mesma coisa, quer dizer, só na sucessão. Explica, pois, nosso conceito de
tempo, a possibilidade de tantos conhecimentos sintéticos “a priori”, como expõe a ciência
geral do movimento, que não é pouco fecunda.
6
Corolários destes conceitos
a) O tempo não subsiste por si mesmo, nem pertence às coisas como determinação
objetiva que permaneça na coisa mesma uma vez abstraídas todas as condições subje tivas de
sua intuição. No primeiro caso, o tempo, sem objeto real, seria sem embargo algo real; no
segundo, sendo uma determinação das coisas mesmas, ou uma ordem estabelecida, não
poderia preceder aos objetos com sua condição, nem ser conhecido e percebid o “a priori” por
proposições sintéticas.
Mas este último tem lugar se o tempo não é mais flue a condição subjetiva sob a qual
são possíveis em nós as intuições; porque, então, esta forma da intuição interna pode ser
representada anteriormente aos objetos, e por conseguinte “a priori”.
b) O tempo é a forma do sentido interno, que quer dizer, da intuição de nós outros
mesmos e de nosso estado interior. O tempo não pode ser de terminação alguma dos
fenômenos externos, não pertence nem a uma figura, nem a uma posição, pois ele determina a
relação das representações em nossos estados internos.
E como esta intuição interior não forma figura alguma, procuramos suprir esta falta
pela analo gia e representamos a sucessão do tempo por uma linha prolongável até o infinito,
cujas diversas partes constituem uma série de uma só dimensão, e derivamos das
propriedades desta linha todas as do tempo, excetuando só uma, a saber: que as partes das
linhas são simultâneas, enquanto que as do tempo são sempre sucessivas. Donde se deduz
também que a representação do tempo é uma in tuição, porque todas as suas relações podem
ser expressas por uma intuição exterior.
c) O tempo é a condição formal “a priori” de todos os fenômenos em geral. O espaço,
como forma pura de todas as intuições externas, só serve, como condição “a priori”, para os
fenômenos exteriores. Pelo contrário, como todas as representações, tenham ou não por
objeto coisas exteriores, pertencem, não obstante, por si mesmas, como esse estado, sob a
condição formal da in tuição interna, pertence ao tempo, é o tempo uma condição “a priori” de
todos os fenômenos interiores (de nossa alma) e a condição imediata dos fénômenos externos.
Se posso dizer “a priori”: todos os fenômenos exteriores estão no espaço e são
determinados “a priori” segundo as relações do espaço, posso afirmar também em um sentido
geral e partindo do princípio do sentido interno: todos os fenômenos em geral, quer dizer,
todos os objetos dos sentidos estão no tempo, e estão necessariamente sujeitos às rela ções do
tempo.
O tempo é um pensamento vazio (nada) se fa zemos abstração de nossa maneira de
intuição interna, do modo como compreendemos todas as in tuições exteriores em nossa
faculdade de representar (mediante essa intuição), e tomamos, por conseguinte, os objetos
tais como podem ser em si mesmos. O tempo tem um valor objetivo somente em relação aos
fenômenos porque estes são coisas que consideramos como objetos de nossos sentidos; mas
deixa de ter esse valor objetivo quando se faz abstração da sensibilidade de nossa intuição
(por conseguinte, desta espécie de representação que nos é própria), quando se fala de coisas
em geral.
O tempo, que não é senão uma condição subjetiva de nossa intuição geral (sempre
sensível, quer dizer, só se produz quando somos afetados pelos objetos), considerado em si
mesmo e fora do sujeito, não é nada. É, não obstante, necessaria mente objetivo em relação a
todos os fenômenos, e por conseguinte, também a todas as coisas que a experiência pode
oferecer-nos. Não podemos dizer: todas as coisas existem no tempo, porque, no conceito de
coisas em geral, faz-se abstração de toda maneira de intuição dessas coisas e sendo esta
propriamente a condição pela qual o tempo pertence à representação dos objetos.
Mas se esta condição se acrescenta ao conceito e se diz: todas as coisas, como
fenômenos (objetos da intuição sensível), existem no tempo, então tem esse princípio o seu
exato valor objetivo e a sua universalidade “a priori”.
As nossas considerações mostram a realidade empírica do tempo, quer dizer, o seu
valor objetivo relativamente a todos os objetos que possam oferecer-se aos nossos sentidos. E
como a nossa in tuição é sempre sensível, não pode nunca oferecer-se a nós outros um objeto
na experiência, que. não seja sujeito às condições do tempo.
Contestamos, portanto, toda pretensão da realidade absoluta do tempo, a saber: a que o
considera, sem atender à forma da nossa intuição sensível, como absolutamente inerente às
coisas, quer dizer, como condição ou propriedade. Tais proprie dades que pertencem às coisas
em si, não podem nunca ser dadas pelos sentidos.
Cumpre admitir a idealidade transcendental do tempo, no sentido de que se se abstraem
as condições subjetivas da intuição sensível, não é absolutamente nada não podendo ser
atribuida, tampouco, as coisas em si mesmas (independentemente de toda relação com a
nossa intuição).
Todavia, esta idealidade, a mesma que a do espaço, não deve ser comparada aos dados
subje tivos das sensações, porque aqui se supõe que o fenômeno mesmo a que se unem estes
atributos tem uma realidade objetiva; a realidade que falta completamente aqui, a não ser que
se considere só empiricamente, quer dizer, seja a título de substância, seja a título de
qualidade. Veja -se sobre isto a observação da primeira seção.
7
Explicação
Contra esta teoria, que admite a realidade empírica do tempo, combatendo a sua
realidade absoluta e transcendental, homens doutos formularam-me uma objeção, que me
parece ocorra ao comum dos leitores, pouco familiarizados com estes assuntos. Tal é a
objeção: há mudanças reais (o que é provado pela sucessão de nossas representações,
querendo-se negar os fenômenos externos e suas mudanças); ora, a mudança das
representações não é possível senão no tempo; logo, o tempo é qualquer coisa de real.
A resposta não é difícil: aceito todo o argumento. O tempo, não resta dúvida, é qualquer
coisa de real: é, com efeito, a forma real da intuição interna. Possui, pois, uma realidade
subjetiva em relação à experiência interna: quer dizer, tenho realmente a representação do
tempo e de minhas próprias determinações nele.
Consequentemente, o tempo não é real como objeto. Mas, se eu mesmo ou um outro
ente me pudesse perceber sem esta condição da sensibilidade, estas mesmas determinações
que nós nos representamos atualmente como mudanças nos dariam um conhecimento em que
não se encontrará mais a representação do tempo, nem, por conseguinte, a de mudança, não
existiriam. Sua realidade empírica permanece, pois, como condição de todas as nossas
experiências. Mas a realidade absoluta não se pode, segundo vimos, conceder ao tempo.
Ele não é mais do que a forma de nossa intuição interna. Se se tira desta intuição a
condição especial de nossa sensibilidade, desaparece igualmente o conceito de tempo, porque
esta forma não pertence aos objetos mesmos, mas ao sujeito que os percebe.
Porém a causa, pela qual tal objeção é formulada tão concordemente, entre os que nada
têm a opor contra a idealidade do espaço, é esta: é que não esperavam poder demonstrar
apoditicamente a realidade absoluta do espaço, inibidos, pelo idealismo, segundo o qual a
realidade dos objetos exteriores não é suscetível de nenhuma demonstração rigorosa,
enquanto que a do objeto do nosso sentido interno (de mim mesmo e de meu esta do) lhes
parecia imediatamente claro pela consciência.
Aqueles poderiam ser simples aparência; mas este, a seu juízo, é inegavelmente
qualquer coisa real. Entretanto, os partidários de tal opinião olvidam que essas duas classes
de objetos, sem necessidade de combater sua realidade como representações, pertencem
somente ao fenômeno, que tem sempre dois aspectos: um, quando o objeto é considerado em
si mesmo (prescindindo da maneira de percebê-lo, cuja natureza permanecerá sendo sempre
problemática); outro, quando se considera a forma da intuição deste objeto, forma que não
deve ser buscada no objeto em si, mas no sujeito, a quem aparece, e que, não obstante,
pertence real e necessariamente ao fenômeno que esse objeto manifesta. São, pois, tempo e
espaço duas fontes de conhecimentos, de que podem derivar-se “a priori” diferentes
conhecimentos sintéticos, como mostra o exemplo das matemáticas puras, respeito ao
conhecimento do espaço e de suas relações.
Eles são, ambos, formas puras de toda intuição sensível que tornam possíveis as
proposições sintéticas “a priori”. Mas estas fontes do conhecimento “a priori”, pela mesma
razão de que só são simples condições da sensibilidade, determinam o seu próprio limite,
enquanto se referem aos obje tos, considerados como fenômenos, e não repre sentam coisas em
si. O valor “a priori” de ditas fontes se limita aos fenômenos; não tem aplicação objetiva fora
dos mesmos.
Esta realidade formal do tempo e do espaço deixa intata a seguridade do conhecimento
experimental, porque estamos igualmente certos desse conhecimento, quer essas formas
sejam necessariamente inerentes às coisas em si, quer somente à nossa intuição das coisas.
Pelo contrário, aqueles que sustentam a realidade absoluta do espaço e do tempo, quer
os tomem como subsistentes por si mesmos, quer como inerentes nos objetos, acham-se em
contradição com os princípios da experiência. Se se decidem pelo primeiro e tomam espaço e
tempo como subsistentes por si mesmos (partido comumente seguido pelos fisicomatemáticos), têm que admitir necessariamente duas quimeras (espaço e tempo), eternas e
infinitas, que só existem (sem que seja algo real) para compreender em seu seio tudo quanto é
real.
Aceitando a segunda opinião seguida por alguns metafísicos da natureza, que consiste
em considerar tempo e espaço como relações de fenômenos (simultâneos no espaço e
sucessivos no tempo), abstraídos da experiência, ainda que confusamente representados nessa
abstração, é preciso negar a validade das teorias matemáticas “a priori” das coisas reais (p.
ex., no espaço); ou pelo menos sua certeza apoditica, posto que não possa ser esta achada “a
posteriori”.
De igual modo, os conceitos “a priori” de espaço e tempo, segundo esta opinião, seriam
só criação da fantasia cuja verdade ira fonte deve buscar-se na experiência, porque de suas
relações abstraídas se tem valido fantasia para formar algo que contenha o que de geral há
nela, ainda que sem as restrições que a natureza lhes tem posto.
Os primeiros têm a vantagem de deixar livre o campo dos fenômenos para as
proposições matemáticas; mas essas mesmas condições os embaraçam em extremo quando o
entendimento quer sair deste campo.
Os segundos têm neste último ponto a vantagem de que as representações de espaço e
tempo não os detêm, quando quer julgar os objetos, não como fenômenos, mas em sua
relação com o entendimento; mas não podem nem dar um fundamento das possibilidades dos
conhecimentos matemáticos “a priori”, faltando-lhes uma verdadeira intuição objetiva “a
priori”, nem ta mpouco conduzir a uma conformidade necessária as leis da experiência e
aquelas asserções.
Em nossa teoria da verdadeira natureza destas duas formas primitivas da sensibilidade
ficam resolvidas ambas as dificuldades. Finalmente é óbvio que a Estética transcendental não
pode conter mais do que esses elementos, a saber: espaço e tempo, posto que todos os outros
conceitos, que pertencem à sensibilidade, mesmo o de movimento que reúne os dois
anteriores, implicam algo empírico, porque o movimento supõe a percepção de algo movível.
O espaço considerado em si mesmo não tem nada de movível: o movível deve ser, pois,
algo que somente se encontra pela experiência no espaço, e, conseguintemente, um dado
empírico. A Estética transcendental não pode tampouco contar entre os seus dados “a priori”
o conceito de mudança; porque o tempo mesmo não muda, mas sim algo que existe no tempo.
Necessita -se, pois, para isso, a percepção de uma certa coisa e da sucessão de suas
determinações, por conseguinte, da experiência.
8
Observações gerais sobre a Estética transcendental
I — Com o fim de evitar erros e más interpretações neste assunto, devemos explicar
claramente nossa opinião sobre a natureza fundamental do conhecimento sensível em geral.
Temos querido provar que todas as nossas intuições só são representações de
fenômenos, que não percebemos as coisas como são em si mesmas, nem são as suas relações
tais como se nos apresentam, e que se suprimíssemos nosso sujeito, ou simplesmente a
constituição subjetiva dos nossos sentidos em geral, desapareceriam também todas as
propriedades, todas as relações dos obje tos no espaço e no tempo, e também o espaço e o
tempo, porque tudo isto, como fenômeno, não pode existir em si, mas somente em nós
mesmos.
Para nós é completamente desconhecida qual possa ser a natureza das coisas em si,
independentes de toda receptividade da nossa sensibilidade. Não conhecemos delas senão a
maneira que temos de percebê-las; maneira que nos é peculiar; mas que tão pouco deve ser
necessariamente a de todo ser, ainda que seja a de todos os homens.
É a esta maneira de perceber que nos ateremos, unicamente.
Tempo e espaço são as formas puras desta percepção, e a sensação, em geral, a sua
matéria. Só podemos conhecer “a priori” as formas puras do espaço e do tempo, quer dizer,
antes de toda percepção efetiva, e por isso se denomina intuição pura; a sensação, pelo
contrário, é que faz ser o nosso conhecimento “a posteriori”, quer dizer, in tuição empírica.
Aquelas formas pertencem absoluta e necessariamente à nossa sensibilidade, e qualquer
espécie que sejam as nossas sensações; estas podem ser mui diversas.
Por mais alto que fosse o grau de clareza que pudéssemos dar à nossa intuição, nunca
nos aproximaríamos da natureza das coisas em si; porque em todo caso só conheceríamos
perfeitamente nossa maneira de intuição, quer dizer, nossa sensibilidade, e isto sempre sob as
condições de tempo e espaço originariamente inerentes no sujeito.
O mais perfeito conhecimento dos fenômenos que é o único que nos é dado atingir,
jamais nos proporcionará o conhecimento dos objetos em si mesmos.
Desnaturam-se os conceitos de sensibilidade e de fenômeno inutilizando e destruindo
toda a doutrina do conhecimento, quando se quer que toda a nossa sensibilidade consista na
representa ção confusa das coisas, representação que conteria absolutamente tudo o que elas
são em si, ainda que sob a forma de um amontoado de caracteres e representações parciais,
que não distinguimos cla ramente uns de outros.
A diferença entre uma representação obscura e outra clara é puramente lógica, e não se
refere ao seu conteúdo.
Sem dúvida, o conceito de direito, empregado pela sã inteligência comum, contém tudo
o que a mais sutil especulação pode desenvolver do mesmo, ainda que no uso prático e
comum não se tenha consciência das diversas representações contidas nesse conceito. Mas
não se pode dizer por isto que o conceito vulgar seja sensível e não designe senão um simples
fenômeno; porque o direito não poderia ser um objeto de percepção, pois o seu conceito
existe no entendimento e representa uma qualidade (a moral) das ações, que elas possuem em
si mesmas.
Pelo contrário, a representação de um corpo na intuição não contém absolutamente
nada que propriamente possa pertencer a um objeto em si, ma s somente o fenômeno (a
manifestação) de alguma coisa e a maneira de como nos afeta.
Ora, esta receptividade de nossa faculdade de conhecer, que se denomina sensibilidade,
perma nece sempre profundamente distinta do conhecimento do objeto em si, ainda que se
pudesse penetrar o fenômeno até o seu âmago. A filosofia leibnitzwolfiana adotou, nas suas
indagações sobre a natureza e origem dos nossos conhecimentos, um ponto de vista errôneo,
ao considerar como exclu sivamente lógica a diferença entre a sensibilidade e o entendimento.
Tal diferença é claramente transcendental, e não se refere só à clareza ou obscuridade,
mas também à origem e conteúdo de nossos conhecimentos; de tal sorte que, mediante a
sensibilidade, não conhecemos de nenhuma maneira as cois as em si mesmas. Desde o
momento em que fazemos abstração de nossa natureza subjetiva, o objeto representado e as
propriedades que lhe atribuímos mediante a intuição desaparecem; porque a natureza
subjetiva é precisamente quem determina a forma desse obje to como fenômeno.
Por outro lado, sabemos distinguir muito bem nos fenômenos o que pertence
essencialmente à intuição dos mesmos, e vale em geral para todo o sentido humano, daquilo
que só lhe pertence de modo acidental, e que não vale para toda relação em geral da
sensibilidade, mas unicamente para a posição particular ou organização deste ou daquele
sentido. Do primeiro conhecimento se diz que representa a coisa em si e do segundo que re -
presenta meramente o fenômeno. Porém essa dife rença é só empírica. Se se permanece nela
(como comumente acontece) e não se considera novamente aquela intuição empírica
(conforme deverá suceder) como um puro fenômeno, no qual não se encontra nada que
pertença a uma coisa em si, desaparece então a nossa distinção transcendental e cremos
conhecer as coisas em si, ainda que nas mais profundas investigações do mundo sensível, só
possamos ocupar-nos de fenômenos.
Assim; por exemplo, se dissermos do arco-iris que ele é um simples fenômeno que se
mostra na chuva iluminada pelo sol, e da chuva que é uma coisa em si, essa maneira de falar
é exata, desde que entendemos a chuva em um sentido físico, quer dizer, como uma coisa
que, na experiência geral, é determinada de tal modo e não diversamente, quaisquer que
sejam as disposições dos sentidos.
Entretanto, se tomamos esse fenômeno empírico de uma maneira geral, e sem nos
ocuparmos de seu acordo com todos os sentidos humanos, perguntarmos se ele representa
também um objeto em si (não direi das gotas de chuva, porque são já, como fenômenos,
objetos empíricos), a questão da relação entre a representação e o objeto vem a ser
transcendental. Não somente essas gotas de chuva são simples fenômenos, mas mesmo a sua
forma e até o espaço em que tombam nada são em si; não passam de modificações ou de
disposições de nossa intuição sensível.
Quanto ao objeto transcendental, permanece completamente ignorado por nós.
Outra importante advertência de nossa Estética transcendental é que não merece ser
recebida somente como uma hipótese verossímil, mas como um valor tão certo e seguro
como pode exigir-se de uma teoria que deve servir de orgânon. E para tornar completamente
evidente esta certeza, escolhamos um caso que mostre visivelmente o seu va lor e possa dar
luz ao que já foi dito no número 3.
Suponho que o espaço e o tempo existem em si objetivamente e como condições da
possibilidade das coisas em si, uma primeira dificuldade se apresenta. Nós tiramos “a priori”
de um e doutro, mas particularmente do espaço, que aqui tomamos, como principal exemplo,
um grande número de proposições apodíticas e sintéticas.
Posto que as proposições da Geometria são conhecidas sinteticamente “a priori” e com
uma certeza apodítica, pergunto: de onde tomais semelhantes proposições e em que se apóia
o nosso entendimento para chegar a essas verdades absolu tamente necessárias e
universalmente válidas?
Só existem dois meios para elas: os conceitos e as intuições. Tais meios nos são
fornecidos “a priori” ou “a posteriori”.
Os conceitos empíricos e o seu fundamento, ou seja, a intuição empírica, nunca podem
fornecer-nos outras proposições sintéticas além das empíricas e de que caracterizam todas as
proposições da Geometria.
O outro meio restante consistiria em alcançar esses conhecimentos com simples
conceitos ou in tuições “a priori”; mas resulta que de simples conceitos não se pode chegar a
nenhum conhecimento sintético, pois só permitem conhecimentos analíticos. Tomai, por
exemplo, a proposição: entre duas linhas retas não pode encerrar-se um espaço e, por
conseguinte, não é possível figura alguma; procurai deduzi-la dos conceitos de reta e do
número dois. Tomai outro exemplo: uma figura é possível com três linhas retas, e intentai
deduzi-la desses mesmos conceitos.
Todos os vossos esforços seriam inúteis, e vos verieis necessitados de recorrer à
intuição, que é o que sempre fez a Geometria.
Dai-nos um objeto na intuição; mas de que espécie é essa intuição? É ela pura, “a
priori”, ou empírica? Se fosse esta última, nunca poderia provir dela uma proposição
universal, e menos ainda, uma apodítica porque, mediante a experiência, não podem ter esta
necessidade e esta universalidade que, sob esse título de proposições experimentais, não se
podem jamais conseguir de semelhante natureza.
Ver-vos-eis obrigados a dar “a priori” vosso objeto na intuição e fundar nele vossa
proposição sintética. Se não existisse em vós uma faculdade de intuição “a priori”, e se esta
condição subjetiva, quanto à forma, não fosse ao mesmo tempo a geral condição “a priori”,
única que torna possível o objeto desta intuição (externa) mesma; se fosse, enfim, o objeto (o
triângulo) algo em si mesmo e alheio a toda relação com vosso sujeito, como podei-íeis dizer
que o que é necessário em vossas condições subjetivas para construir um triângulo deve
também pertencer imprescindivelmente ao triângulo em si?
Porque vós não podeis acrescentar aos vossos conceitos (de três linhas) nada de novo (a
figura), que necessariamente deva encontrar-se no objeto porque esse objeto é dado
anteriormente ao nosso conhecimento e não por ele. Se não fosse, pois, o espaço (e mesmo o
tempo) uma forma pura de vossa intuição, que contém as condições “a prio ri”, as únicas que
podem fazer com que sejam para vós as coisas objetos exteriores, e que sem esta condição
subjetiva não são nada em si, não poderíeis determinar nada sinteticamente “a prio ri” dos
objetos externos. É portanto indubitavelmente certo, e não só verossímil ou possível, que
espaço e tempo, como condições necessárias para toda experiência (interna e externa) não são
mais do que condições puramente subjetivas de todas as nossas intuições, e que a este
respeito todos os objetos são somente fenômenos e não coisas em si dadas desta maneira.
Destes pode dizer-se muito “a priori”, refe rente à forma desses objetos; mas nada da
coisa em si mesma que possa servir de fundamento a esses fenômenos.
II — Para confirmar esta teoria da idealidade e do sentido interno e externo e,
conseqüentemente, de todos os objetos do sentido, como puros fenômenos, pode -se todavia
observar que tudo o que pertence à intuição em nosso conhecimento (excetuando o
sentimento de prazer, de dor e a vontade, que não são conhecimentos) não contém mais que
simples relações: relações de lugar em uma intuição (extensão), de mudança de lugar
(movimento) e de leis que determinam essa mudança (forças motrizes).
Mas o que está presente no lugar ou o que atua nas coisas mesmas fora da mudança de
lugar não está dado na intuição. Pois bem; como pelas simples relações não pode ser
conhecida uma coisa em si, é justo julgar que o sentido externo, que só nos fornece simples
representações de rela ções, não possa compreender em sua representa ção mais do que a
relação de um objeto com o sujeito, e não o que é próprio ao objeto e lhe pertence em si.
O mesmo sucede com a intuição interna. Não são só as representações dos sentidos
externos que constituem a matéria própria com que enriquecemos nosso espírito, porque o
tempo (no qual colo camos estas representações, e que precede à cons ciência das mesmas na
experiência, servindo-lhes de fundamento como condição formal da maneira que temos de
dispô-las em nosso espírito) compre ende já relações de sucessão, de simultaneidade, e do que
é simultâneo com o sucessivo (permanente)
Ora, tudo o que pode, como representação, preceder a todo ato de pensamento, é a
intuição; e como ela não contém senão relações, a firma da intuição, que não representa nada
até que alguma coisa seja dada no espírito, não pode ser outra coisa mais do que a maneira
segundo a qual o espírito foi afetado por sua própria atividade, ou por esta posição de sua
representação, por conseguin te, por si mesmo, quer dizer, um sentido interno considerado em
sua forma.
Tudo o que é representado por um sentido é sempre um fenômeno, e, por conseguinte,
ou não deve reconhecer-se um sentido interno, ou o sujeito que é objeto do mesmo não pode
ser repre sentado por este sentido interno senão como um fenômeno, e não como ele se
julgaria a si mesmo, se sua intuição fosse simplesmente espontânea, quer dizer: intelectua l.
Toda a dificuldade consiste em saber-se como um sujeito pode perceber-se intuitivamente a si
mesmo; mas esta dificuldade é comum a todas as teorias.
A consciência de si mesmo (apercepção) é a representação simples do eu; e se tudo que
existe de diverso no sujeito fosse dado espontaneamente nesta representação, a intuição
interna seria ente intelectual. Esta consciência exige no homem uma percepção interna
diversa, previamente dada no sujeito, e o modo segundo o qual é dada no espírito sem alguma
esponta neidade deve, em virtude dessa diferença, chamar-se sensibilidade.
Para que a faculdade de ter consciência de si mesmo possa descobrir (apreender) aquilo
que está no espírito, cumpre que aquele seja afetado: só sob esta condição podemos ter a
intuição de nós mesmos; mas a forma desta intuição, existindo previamente no espírito,
determina na representação do tempo a maneira de compor a diversidade no espírito; ele se
percebe intuitivamente, não como se representara a si mesmo imediatamente e em virtude de
sua espontaneidade, mas segundo a maneira pela qual ele é intuitivamente afetado, e, por
conseguinte, tal como ele se oferece a si próprio e não como é.
III — Ao afirmar que a intuição dos objetos exteriores, e a que o espírito tem de si
mesmo, representam, no espaço e no tempo, cada uma de per si, seu objeto, tal como este
afeta os nossos sentidos, isto é, segundo nos aparecem, não quero dizer que esses objetos
sejam mera aparência. E sustentamos isto, porque, no fenômeno, os objetos e também as
propriedades que lhe atribuímos são sempre considerados como algo dado realmente;
somente, como essas qualidades dependem unicamente da maneira de intuição, do sujeito em
sua relação com o objeto dado, este objeto, como manifestação de si mesmo, é distinto do que
ele é em si.
Assim, não digo que os corpos parecem existir simplesmente fora de mim, ou que
minha alma só parece estar dada em minha consciência, quando afirmo que a qualidade do
tempo e do espaço, segundo me represento e onde coloco a condição de sua existência, existe
em meu modo de intuição e não nos objetos em si. Seria culpa minha se o que deve
considerar-se como fenômeno fosse tido como uma pura aparência.(3)
Mas isto não se dá com o nosso princípio de idealidade de todas as nossas intuições
sensíveis; concedendo-se, pelo contrário, uma realidade obje tiva a essas formas da
representação, tudo inevitavelmente se converte em pura aparência. Ao considerar tempo e
espaço como qualidades que devem encontrar-se nas coisas em si para sua possibilidade,
reflita-se nos absurdos a que chegam, admitindo duas coisas infinitas sem ser substâncias,
nem algo realmente inerente nelas, mas que devem ser algo existente para condição
necessária de existência para todos os objetos, e que subsistiriam ainda mesmo que cessassem
de existir todas as coisas.
Não se deve censurar ao bom Berkeley, por ter reduzido tudo à aparência. Nossa
própria existência, dependente em tal caso da realidade subsis tente em si de uma quimera, tal
como o tempo, será como este uma vá aparência: absurdo que até agora ninguém ousou
sustentar.
IV — Na Teologia natural, em que se concebe um objeto que não só não pode ser para
nós outros objeto de intuição, nem tampouco o pode ser de nenhuma intuição sensível,
distingue -se cuidadosamente de sua própria intuição as condições de espaço e tempo (digo de
sua intuição, porque todo o seu conhecimento deve ter este caráter e não o de pensamento,
que supõe limites).
Mas, com que direito se procede assim, uma vez que se consideram espaço e tempo
como formas dos objetos em si, e formas tais que subsistiriam como condições “a priori” da
existência das coisas, ainda que estas desaparecessem? Se são condições de toda existência
em geral, devem ser também da existência de Deus.
Se não são, pois, considerados espaço e tempo como formas objetivas de todas as
coisas, é indispensável tê-los por formas subjetivas de nosso modo de intuição, tanto interna
como externa. E afirmamos de tais intuições a sua qualidade de sensíveis, porque não são tais
que por si sós produzam a existência real do objeto (cujo modo de intuição cremos que só
pode pertencer ao ser supremo), mas que depende da existência do objeto e só são possíveis
sendo afetada a faculdade repre sentativa do sujeito.
Tampouco é necessário que limitemos a maneira de conhecer por intuição pelas quais
representamos as coisas no espaço e no tempo, à sensibilidade humana. Quiçá todos os seres
finitos, pensantes, conformem necessariamente nisto com os homens (ainda que nada
possamos decidir neste particular); mas nem por essa universalidade deixará a intuição de ser
sensibilidade, porque é derivada (intuitus derivatus) e não primitiva (intuitus originarius), e,
por conseguinte, não é intuição intelectual, como a que parece pertencer tão-só ao ser
supremo pelas razões antes indicadas e não um ser independente, tanto pela sua existência
como pela sua intuição (que determina a sua existência em relação com os objetos dados).
Esta última observação não deve ser considerada mais do que um esclarecimento e não como
uma prova de nossa teoria estética.
Conclusão da Estética transcendental
Já possuímos um dos dados requeridos para a solução do problema geral da Filosofia
transcendental: como são possíveis as proposições sintéticas “a priori”?
Quer dizer, esta s intuições puras “a priori”: espaço e tempo. Quando em nosso juízo “a
priori” queremos sair do conceito dado, encontramos algo que pode ser descoberto “a priori”
na intuição correspondente e não no conceito, e que pode ser enlaçado sinteticamente a este
conceito; mas juízos que, por esta razão, só alcançam aos objetos dos sentidos e só valem
para os da experiência.
Parte Segunda
DA TEORIA ELEMENTAR TRANSCENDENTAL
LÓGICA TRANSCENDENTAL
— Introdução —
Idéia de Uma Lógica Transcendental
I — Da Lógica em geral
Nosso conhecimento emana de duas fontes principais do espírito: a primeira consiste na
capacidade de receber as representações (a receptividade das impressões), e a segunda, na
faculdade de conhecer um objeto por meio dessas representações (a espontaneidade dos
conceitos). Pela primeira nos é dado um objeto, pela segunda é pensado em relação a essa
representação (como pura determinação do espírito).
Constituem, pois, os elementos de todo nosso conhecimento, a intuição e os conceitos;
de tal modo, que não existe conhecimento por conceitos sem a correspondente intuição ou
por intuições sem conceitos. Ambos são puros ou empíricos: empíricos se neles se contém
uma sensação (que supôe a presença real do objeto); puro, se na representação não se mescla
sensação alguma. Pode chamar-se à sensação, a matéria do conhecimento sensível.
A intuição pura, portanto, contém unicamente a forma pela qual é percebida alguma
coisa, e o conceito puro a forma do pensamento de um objeto em geral. Somente as intuições
e conceitos puros são possíveis “a priori”; os empíricos só o são “a posteriori”.
Se denominamos sensibilidade à capacidade que tem nosso espírito de receber
representações (receptividade), quando é de qualquer modo afeta do, pelo contrário, chamarse-á entendimento à faculdade que temos de produzir nós mesmos representações ou a
espontaneidade do conhecimento.
Pela índole da nossa natureza a intuição não pode ser senão sensível, de tal sorte, que só
contém a maneira de como somos afetados pelos obje tos. O entendimento, pelo contrário, é a
faculdade de pensar o objeto da intuição sensível. Nenhuma dessas propriedades é preferível
à outra. Sem sensibilidade, não nos seriam dados os objetos, e sem o entendimento, nenhum
seria pensado. Pensamentos sem conteúdo são vazios, intuições sem certos conceitos, são
cegos.
Assim, é necessário tornar sensíveis os conceitos (quer dizer, fornecer-lhes o objeto
dado na intuição), bem como tornar inteligíveis as intuições (submetendo-as a conceitos).
Estas duas faculdades ou capacidades não podem trocar de funções. O entendimento não
pode perceber e os sentidos não podem pensar coisa alguma. Somente quando se unem,
resulta o conhecimento.
Cumpre, no entanto, não confundir as suas funções, importando separá-las e distinguilas cuidadosamente. Em semelhante distinção se acha a base para distinguir também a ciência
das regras da sensibilidade em geral, quer dizer, a Estética, da ciência das leis do
entendimento em geral, quer dizer, da Lógica.
A Lógica, por sua vez, pode ser considerada sob dois pontos de vista, conforme se
examinem as operações gerais ou as operações particulares do entendimento. A primeira
compreende as regras absolutamente necessárias do pensar, sem as quais não podem ter lugar
as operações intelectuais, e, por conseguinte, ela encara esta faculdade, independentemente
da diversidade dos objetos aos quais pode aplicar-se. A Lógica das operações particulares
contém as regras para pensar retamente sobre certos objetos determinados.
A primeira pode chamar-se Lógica elementar; a segunda, é o orgânon desta ou daquela
ciência. Esta última é habitualmente ensinada nas escolas como propedêutica das ciências,
embora no desenvolvimento da razão humana ela seja o último lugar a ser atingido; pois só
ali chegamos quando a ciência se encontra muito adiantada, e só espera a última palavra para
atingir o mais elevado grau de exatidão e perfeição. Com efeito, é preciso conhecer os objetos
suficientemente, para poder dar as regras segundo as quais pode formar-se a ciência.
A Lógica geral é pura ou aplicada. Na primeira, abstraímos todas as condições
empíricas, sob as quais se exerce o nosso entendimento, p. ex.: a influência dos sentidos, o
jogo da imaginação, as leis da memória, o poder do hábito, a inclinação etc.;
conseguintemente, também as fontes dos pre juízos e, em geral, todas as causas verdadeiras ou
supostas de que podem derivar-se certos conhecimentos que, por não se referirem só ao
entendimento necessitam da experiência.
A Lógica geral e pura tem por único objetivo princípios “a priori” e é um cânon do
entendimento e da razão, mas unicamente em relação à parte formal de seu uso, qualquer que
seja o seu conteúdo (empírico ou transcendental). Diz -se que uma Lógica geral é aplicada,
quando se ocupa das regras do uso do entendimento, sob as condições empíricas e subjetivas
que nos ensina a Psicolo gia. Esta Lógica tem, pois, também, princípios empíricos, ainda que
seja geral enquanto trata da aplicação do entendimento sem distinção de obje tos. Portanto,
não é um cânon do entendimento em geral, nem um orgânon das ciências particula res, mas
unicamente um purificador (4) do entendimento comum.
Deve ser, pois, completamente separada na Lógica geral, aquela parte que constitui a
teoria pura da razão, da outra que forma a Lógica apli cada (por mais que esta seja também
geral).
Só a primeira é propriamente uma ciência, certa e árida, como o exige um tratado
escolástico da doutrina elementar do entendimento. Nesta parte os lógicos devem ter sempre
presentes, duas regras:
1) Como Lógica geral, abstrai a matéria do conhecimento intelectual e toda a
diversidade de seus objetos, e só se ocupa da forma do pensamento.
2) Como Lógica pura, não tem nenhum prin cípio empírico e, por conseguinte, não
empresta nada (como frequentemente se persuade) da Psicologia, que não exerce influência
alguma sobre o cânon do entendimento. É uma doutrina demonstrada, e tudo deve ser nela
amplamente “a priori”.
Quanto à Lógica que denomino aplicada (contra a significação comum desta palavra,
que designa certos exercícios e cuja regra a Lógica pura fornece) é que representa o
entendimento e as regras de seu uso necessário considerado “in concreto”, quer dizer,
enquanto se acha submetido às condições contingentes do sujeito que poderão ser-lhe opostas
ou favoráveis, não sendo jamais dadas “a priori”. Essa Lógica trata da atenção, de seus
obstáculos e efeitos, da origem dos erros, do estado da dúvida, do escrúpulo, da persuasão,
etc.
Possui com a Lógica geral e pura a mesma re lação que existe entre a moral pura, que
contém unicamente as leis morais necessárias de uma vontade livre em geral, e a ética
propriamente dita (teoria das virtudes) que examina essas leis em relação aos obstáculos com
que tropeçam nos sentimentos, inclinações e paixões a que muito ou pouco estão sujeitos os
homens. Esta nunca seria uma ciência demonstrada, porque do mesmo modo que a Lógica
aplicada, ela tem necessidade de princípios empíricos e psicológicos.
II — Da Lógica transcendental
Já temos dito que a Lógica geral faz abstração de todo conteúdo do conhecimento, quer
dizer, de toda relação entre o conhecimento e o objeto, e que só compreende a forma lógica
dos conhecimentos em todas as suas respectivas relações: em uma palavra, a forma do
pensamento em geral. Mas assim como há intuições puras tanto quanto intuições empíricas
(que a Estética trans cendental prova), poderia muito bem achar-se uma diferença entre um
pensamento puro e um empírico dos objetos.
Sendo assim, haveria uma Lógica em que se não faria abstração de todo o conteúdo do
conhe cimento, porque a que só contivesse as regras do pensamento puro de um objeto,
excluiria todos esses conhecimentos cujo conteúdo fosse empírico. Esta Lógica investigaria
também a origem do nosso conhecimento de objetos, enquanto tal origem não possa ser
atribuida aos objetos; a Lógica geral, pelo contrário, não se ocupa com essa origem do
conhecimento, e só se limita a examinar as nossas representações sob o ponto de vista das leis
com que o entendimento a emprega e reúne entre si, quando pensa. Pouco lhe interessa que
essas representações tenham sua origem “a priori” em nós outros ou que tenham sido dadas
empiricamente; unicamente se ocupa da forma que o entendimento pode dar-lhes, quaisquer
que sejam as suas fontes de proveniência. Devo fazer aqui uma observação que tem muita
importância para o que se segue e que é preciso não olvidar um só instante.
A palavra transcendente não convém a todo conhecimento “a priori”, mas só àquele
mediante o qual conhecemos que certas representações (intuições ou conceitos) não são
aplicadas ou possíveis senão “a priori” e como o são (pois esta pala vra designa a
possibilidade do conhecimento ou de seu uso “a priori”). Desta sorte, não são representações
transcendentais o espaço nem qualquer de terminação geométrica “a priori” do espaço, e só
pode ter o nome de transcendental o conhecimento da origem não empírica dessas
representações e da maneira com que podem referir-se “a priori” a objetos da experiência.
Assim, também, será transcendental a aplicação do espaço aos objetos em geral, e
empírica, quando se limitar unicamente a objetos dos sentidos. A diferença do transcendental
e do empírico pertence, pois, tão-só à crítica dos conhecimentos e em nada respeita à relação
desses conhecimentos com seus objetos.
Na presunção de que há conceitos que se podem relacionar “a priori” aos objetos, não
como intuições puras ou sensíveis, mas somente como atos de pensamento puro, e que por
conseguinte são conceitos, mas conceitos cuja origem não é empírica nem estética, nós
concebemos previamente a idéia de uma ciência do entendimento puro e do conhecimento
racional pela qual nós pensamos os objetos completamente “a priori”. Semelhante ciência que
determinasse a origem, a extensão e o valor obje tivo desses conhecimentos, se deveria
chamar Lógica transcendental, porque ao mesmo tempo em que se ocupasse com as leis da
entendimento e da razão, por outro lado, só te ria que ver com objetos “a priori” e não, como a
Lógica geral, com conhecimentos empíricos ou puros sem distinção alguma.
III — Divisão da Lógica geral em Analítica e Dialética
Que é a verdade? Com esta antiga quão céle bre pergunta acreditava -se colocar em
dificuldade os lógicos, obrigando-os a incidir na logomaquia mais lamentável, ou a
confessarem a sua ignorância e, por conseguinte, toda a fatuidade de sua arte. A definição do
vocábulo verdade, como sendo a conformidade do conhecimento ao objeto, já está admitida e
suposta nesta obra; mas o que se de seja conhecer é o critério geral e certo de todo
conhecimento.
Saber aquilo que racionalmente se deve indagar, já por si prova exuberância de
entendimento e sabedoria; porque se a pergunta é absurda em si e requer respostas ociosas,
não só desonra a quem a formula, como produz o inconve niente de precipitar no absurdo ao
que sem pensar responde e dá deste modo o triste espetáculo de duas pessoas que, como
dizem os antigos, um ordenha enquanto o outro segura a vasilha.
Se a verdade consiste na conformidade de um conhecimento com seu objeto, este
objeto deve, por isso mesmo, ser distinguido de todos os outros; pois um conhecimento é
falso se não concorda com o objeto a que se relaciona, por mais que de outro modo contenha
algo que possa servir para outros objetos. Assim, um critério geral da verdade valeria, sem
distinção de seus objetos, para todos os conhecimentos.
Mas como então se faria a abstração de todo conteúdo do conhecimento (de sua relação
com o objeto), e a verdade precisamente se refere a tal conteúdo, é claro ser de todo
impossível e absurdo salientar uma característica suficiente e universal da verdade.
E, como já antes chamamos ao conteúdo do conhecimento de sua matéria, é lógico
dizer que encerra uma contradição querer-se buscar um critério universal para a verdade do
conhe cimento quanto à matéria, por ser contraditório em si. No que se refere ao
conhecimento considerado simplesmente na forma (abstração feita de todo conteúdo), é claro
que uma lógica, expondo as regras universais e necessárias do entendimento, fornece nessas
mesmas critérios da verdade.
Tudo quanto contradite a essas leis é falso, porque o entendimento se põe em
contradição com as regras gerais de seu pensamento, quer dizer: consigo mesmo. Mas esses
critérios só respeitam à forma da verdade, quer dizer, ao pensar em geral, e se já estes
conceitos são exatos, não são suficientes, porque ainda que um conhecimento concorde
completamente com a forma lógica (quer dizer, que não esteja em contradição consigo
mesmo), pode muito bem suceder que contradiga ao obje to.
O critério simplesmente lógico da verdade, a saber: a concordância de um
conhecimento com as leis universais e formais do entendimento e da razão, será pois a
condição “sine qua non”, quer dizer, negativa, de toda verdade; mais longe não pode ir a
Lógica, faltando-lhe uma pedra de toque, pela qual possa descobrir o erro, que alcance ao
conteúdo e não à forma.
A Lógica geral decompõe, pois, em seus elementos toda a obra formal do entendimento
e da razão, e os apresenta como princípios de toda apreciação lógica do nosso conhecimento.
A esta parte da Lógica pode dar-se o nome de analítica, e e desta sorte a pedra de toque da
verdade, ainda que negativa, porque cumpre controlar e julgar segundo as suas regras a forma
de todo conhecimento, antes de lhe examinar o conteúdo, para ver se em relação ao objeto
contém alguma verdade positiva. Mas como não basta de modo algum para decidir sobre a
verdade material (objetiva) do conhecimento, a forma pura do mesmo, por muito que
concorde com as leis lógicas, ninguém pode aventurar-se apenas com a Lógica a julgar obje -
tos, nem a afirmar nada, sem ter antes achado, e independentemente dela, manifestações
fundadas, salvo pedir em seguida às leis lógicas em uso e encadeamento em um todo
sistemático, ou melhor ainda, submetê-los simplesmente a essas leis. Todavia, há alguma
coisa de sedutor na posse desta arte precisa que consiste em dar a todos os nossos
conhecimentos a forma do entendimento, por va zio e pobre que possa ser o seu conteúdo, que
esta Lógica geral que só é um cânon do juízo, converter-se em certo modo em orgânon que
utiliza para tirar afirmações objetivas, pelo menos aparentemente, cometendo assim um
verdadeiro abuso. Tomada a Lógica geral por orgânon, tem o nome de Dialética.
Por diferente que seja a significação dada pelos antigos a essa palavra da nossa, podese, sem embargo, deduzir do uso que realmente faziam, que a Dialética para eles era só a
Lógica da apa rênçia; quer dizer, uma arte sofistica, própria para dar à sua ignorância e aos
seus artificios preconcebidos o verniz da verdade, tratando de imitar o método fundamental
que prescreve a Lógica em geral e auxiliados pela Tópica para dar curso às mais vãs
alegações. Mas convém repetir, e é uma advertência que tanto tem de segura quanto de útil,
que a Lógica geral, considerada como orgânon, é sempre uma Lógica de aparência, quer
dizer, Dialética.
Porque como nos não ensina nada sobre o conteúdo do conhecimento, e só se limita a
expor as condições formais da concordância do conhecimento com o entendimento,
condições que, por outro lado, são por completo indiferentes aos objetos, resulta que a
pretensão de servir-se desta Lógica como de instrumento (orgânon) para estender e aumentar
os seus conhecimentos só pode conduzir a uma pura parolagem, pela qual se afirma ou se
nega aquilo que se deseja com a mesma aparência de razão. Tal ensinamento está totalmente
em oposição à dignidade da Filosofia. Por isso, é justo aplicar o nome de Dialética à
aparência dialética. Neste sentido é que aqui a compreendemos.
1V — Divisão da Lógica transcendental em analítica e Dialética transcendental
Na Lógica transcendental, nós isolamos o entendimento (como na Estética
transcendental isolamos a sensibilidade), e só tomamos do nosso conhecimento a parte do
pensamento que só tem sua origem no entendimento. Mas há antes, no uso deste
conhecimento puro, uma condição que se supõe a saber: que os objetos a que possa aplicar-se
nos tenham sido dados na intuição, porque sem intuições carece de objetos todo o nosso
conhecimento e está inteiramente vazio.
A parte da Lógica transcendental que expõe os elementos do conhecimento puro do
entendimento e os princípios sem os quais nenhum objeto em geral pode ser pensado, é a
Analítica transcendental. Ela é ao mesmo tempo uma Lógica da verda de.
Com efeito, nenhum conhecimento pode estar em contradição com esta Lógica sem
logo perder todo o seu conteúdo, quer dizer, toda relação com — algum objeto, por
conseguinte, toda verdade.
Mas como é muito atraente, muito sedutor servir-se desses conhecimentos e princípios
puros do entendimento sem consideração à experiência, ou mesmo saindo dos limites da
experiência, única que nos pode fornecer a matéria à qual se aplicam estes conceitos puros, o
entendimento corre o risco de fazer, por meio de raciocínios vãos, um uso ma terial dos
princípios simplesmente formais do entendimento puro, e de pronunciar indistintamente
sobre objetos que nos não são dados e que talvez não o possam ser de nenhuma maneira.
Se a Lógica, pois, não deve ser mais do que um campo que só serve para julgar o uso
empírico dos conceitos do entendimento, é um verdadeiro abuso querer fazê-la passar por um
orgânon com uso universal e ilimitado e aventurar-se, com apenas o entendimento puro, a
emitir julgamentos sintéticos sobre os objetos em geral e decidir dizer algo sobre eles. É neste
caso que o uso do entendimento puro é dialético.
A segunda parte da Lógica transcendental deve, pois, ser uma crítica desta aparência
dialética; e se porta o título de Dialética transcendental, não é como arte de suscitar
dogmaticamente essa apa rência (arte, por infelicidade, muito difundida da fantasmagoria
filosófica), mas como crítica do entendimento e da razão em seu uso hiperfísico, crítica tendo
por fim descobrir a falsa aparência que cobre suas vãs pretensões, e de limitar esta ambição
que se vangloria de achar e estender o conhecimento unicamente por meio de leis
transcendentais, e julgar e controlar somente o entendimento puro e a premuni-lo contra as
ilusões sofisticas.
Primeira Divisão da Lógica Transcendental - Analítica
Transcendental
Esta analítica é a decomposição de todo nosso conhecimento “a priori" nos elementos
do conhe cimento puro do entendimento. É preciso levar em conta os seguintes pontos: 1.°
que os conceitos sejam puros e não empíricos; 2.° que os mesmos não pertençam à intuição e
à sensibilidade, mas ao pensamento e ao entendimento; 3.° que sejam conceitos elementares
diferentes dos derivados ou dos que são compostos; 4.° que seu quadro seja completo e
abarque todo o campo do entendimento puro.
Esta perfeição de uma ciência não pode ser admitida com toda confiança, se ela não for
mais do que um agregado formado por simples tentativas: ela só é possível por meio de uma
idéia do todo do conhecimento “a priori” devida ao entendimento, e, pela divisão, precisa por
isso mesmo dos conceitos que a constituem, em uma palavra, por meio de sua ligação em um
sistema. O entendimento puro não se distingue somente de todo elemento empírico, mas
ainda de toda sensibilida de. Ele forma uma unidade que existe por si mesma, que subsiste em
si mesma, e que não pode ser acrescida por qualquer adição de elemento estranho.
O conjunto de seu conhecimento formará, pois, um sistema compreensível e
determinável, sob uma só idéia e cuja totalidade e organização servem para provar a
legitimidade e valor de todos os elementos constitutivos do conhecimento. Mas esta parte da
Lógica transcendental se divide em dois livros, compreendendo um os conceitos e outro, os
princípios do entendimento puro.
Livro Primeiro
DA ANALÍTICA TRANSCENDENTAL
Analítica dos conceitos
Entendo por analítica dos conceitos, não a análise dos mesmos ou o método, geralmente
seguido nas indagações filosóficas, consistente em decompor os conceitos que se apresentam
para dar clareza ao seu conteúdo, mas a decomposição, ainda pouco intentada, da faculdade
mesma do entendimento, para examinar a possibilidade dos conceitos “a priori” que
buscamos somente no entendimento, como no seu lugar de origem, e considerar, em geral, a
aplicação pura desta faculdade. Tal é o objeto da Filosofia transcendental; o restante é o
estudo lógico dos conceitos, tal como se usa na Filosofia.
Seguiremos os conceitos puros até as suas raízes ou seus primeiros rudimentos, no
entendimento humano, onde existiam precedentemente, à espera da experiência para o seu
desenvolvimento e que, livres por esse mesmo entendimento das condições empíricas que
lhes são inerentes, cheguem a ser expostos em toda a sua pureza.
CAPITULO 1
Orientação para a descoberta de todos os conceitos puros do
entendimento
Ao exercitar a faculdade de conhecer em de terminadas circunstâncias, apresentam-se
diferentes conceitos que mostram a existência desta faculdade, e que podem ser expostas em
uma lista mais ou menos extensa, segundo seja a sua observação mais detida e profunda. Não
se pode assina lar, com segurança, o termo desta indagação, cujo procedimento é, para dizer
assim, mecânico.
Existem também conceitos, que se descobrem só ocasionalmente, e que não estão em
uma ordem dada nem em uma unidade sistemática. A ordena ção destes conceitos só pode
fazer-se mediante certas analogias e a importância de seu conteúdo, indo do simples ao
composto; tal série nada possui de sistemático ainda que tenha sido realizada me todicamente.
A Filosofia transcendental tem a vantagem, e por seu turno a missão, de investigar estes
conceitos, segundo um princípio porque procedem do entendimento puro e sem mescla
alguma, como de uma unidade absoluta, e devem, por conseguinte, compor-se entre si sob um
conceito ou idéia. Mas tal composição proporciona uma regra, segundo a qual o lugar de cada
conceito puro do entendimento, e a integridade de seu conjunto, podem ser determinados “a
priori”, pois dependeriam do capricho ou do azar, em caso contrário.
Primeira Seção
Orientação Transcendental Para a Descoberta de Todos os Conceitos do
Entendimento
Do uso lógico do entendimento em geral
O entendimento foi definido, antes, de uma maneira puramente negativa: uma
faculdade de conhecer não sensível. Pois bem; como não podemos ter nenhuma intuição
independente da sensibilidade, não é portanto o entendimento uma faculdade intuitiva. Mas
fora da intuição, não há outra maneira de conhecer senão por conceitos. É, por conseguinte, o
conhecimento do entendimento, pelo menos o do homem, um conhecimento por conceitos,
quer dizer, não intuitivo, mas discursivo.
Todas as intuições enquanto sensíveis apóiam-se nas afeições, mas os conceitos
supõem funções. Entendo por função a unidade de ação para ordenar diferentes
representações sob uma comum a todas elas. Fundam-se, pois, os conceitos na
espontaneidade do pensamento, do mesmo modo que as intuições sensíveis na receptividade
das impressões. O entendimento não pode fazer destes conceitos outro uso senão julgar por
seu in termédio.
Como nenhuma representação se refere ime diatamente ao objeto, a não ser a intuição,
nunca um conceito se referirá imediatamente a um objeto senão a qualquer outra
representação desse objeto (seja intuição, seja conceito). O juízo é, pois, o conhecimento
mediato de um objeto, por conseguinte, a representação de uma representa ção do objeto. Em
todo juízo há um conceito aplicável a muitas coisas e que sob esta pluralidade compreende
também uma representação dada, a qual se refere imediatamente ao objeto. Assim, por
exemplo, no juízo: todos os corpos são divisíveis, o conceito de divisibilidade se refere
também a outros, entre os quais se faz aqui uma relação especial ao conceito de corpo,
referido por seu turno a certos fenômenos que se oferecem à nossa vista. Assim, pois, estes
objetos são representados pelo conceito de divisibilidade.
Todos os juízos são função da unidade entre as nossas representações, que, em lugar de
uma representação imediata, substitui outra mais ele vada que compreende em seu seio a esta
e outras muitas e que serve para o conhecimento do objeto reunindo deste modo muitos
conhecimentos possíveis em um só. Mas podemos reduzir todas as operações do
entendimento a juízos; de modo que o entendimento em geral pode ser representado como a
faculdade de julgar. Porque, segundo o que precede, é uma faculdade de pensar.
O pensamento é o conhecimento por conceitos. Mas os conceitos se relacionam como
predicados de juízos possíveis com uma representação qualquer de um objeto ainda
indeterminado. Assim, o conceito de corpo significa algo, por exemplo, um metal que pode
ser conhecido mediante aquele conceito. É, pois, somente, conceito conquanto diante as quais
pode referir-se a objetos. É, pois, o predicado de um juízo possível, por exemplo, deste: todo
metal é um corpo. As funções do entendimento podem ser achadas se se expõem com certeza
as funções de unidade no juízo. A seção que segue mostrará que isto pode ser feito perfeita -
mente.
Segunda Seção
9
Da função lógica do entendimento no juízo
Se abstraímos todo o conteúdo de um juízo em geral e somente atendemos à pura forma
do entendimento, acharemos que a função do pensamento no juízo pode compreender-se sob
quatro títulos que contêm, respectivamente, cada um, três momentos. Podem ser facilmente
representados no seguinte quadro:
Tábua das Categorias
1
QUANTIDADE DOS JUÍZOS
Gerais
Particulares
Singulares
2
QUALIDADE
Afirmativos
Negativos
Indefinidos
3
RELAÇÃO
Categóricos
Hipotéticos
Disjuntivos
4
MODALIDADE
Problemáticos
Assertórios
Apodíticos
Como esta divisão parece diferir em alguns pontos, ainda que não essenciais, da técnica
usada pelos lógicos, serão úteis as seguintes observações, para evitar uma má interpretação.
1.° Os lógicos dizem, com razão, que no uso que se faz dos juízos nos raciocínios pode -
se tratar do mesmo modo os juízos singulares e os gerais. Porque, precisamente, eles não têm
extensão, seu predicado não pode ser referido simplesmente a uma parte do que contém o
conceito do sujeito e ser excluído do restante. Ele se aplica, pois, a todo esse conceito sem
exceção, como se se tratasse de um conceito geral, a cuja extensão conviria o predicado. Mas
se comparamos um julgamento singular com um julgamento geral, a título simplesmente de
conhecimento e sob o ponto de vista da quantidade, veremos que o primeiro está para o
segundo assim como a unidade está para o infinito, e que, por conseguinte, é em si
essencialmente distinto.
Se examinarmos um juízo singular “judicium singulare”, não somente quanto ao seu
valor intrínseco, como também como conhecimento em geral, segundo a quantidade que tem
em comparação com outros conhecimentos, é, indubitavelmente, distinto dos juízos gerais
“judicia communia”, e merece um lugar particular em uma tábua perfeita dos momentos do
pensamento em geral (ainda que seguramente não em uma lógica limitada puramente ao uso
dos juízos em si).
2.° De igual modo, em uma lógica transcendental, os juízos indefinidos devem ser
distinguidos dos julgamentos afirmativos, ainda que na ló gica geral estejam incluídos na
mesma posição e não formem subdivisão à parte. Esta última (lógica) faz abstração de toda a
matéria do predicado (mesmo quando for negativo) e considera somente se esse atributo
pertence ao sujeito ou lhe é oposto.
A primeira, pelo contrário, considera também o juízo quanto à matéria ou conteúdo
desta afirmação lógica, feita mediante um atributo puramente negativo, e indaga o que esta
afirmação representa para o conhecimento em geral. Se dig o da alma: ela não é mortal, livrome, mediante um juízo negativo, pelo menos de um erro. Pela proposição: a alma não é
mortal, afirmei segundo a forma lógica, colocando a alma na ílimitada circunscrição dos seres
imortais. Porque constituindo o mortal uma parte de toda a extensão dos seres possíveis, e o
imortal a outra parte, por minha proposição não se disse outra coisa senão que a alma é uma
dentre as muitas coisas que permanecem quando se tirou delas tudo quanto é mortal.
Mas a esfera indefinida de tudo o que é possível foi somente limitada enquanto se
separou dela tudo quanto é mortal, e colocou-se a alma na parte restante. Porém este espaço
permanece sempre indefinido e muitas partes poderiam suprimir-se sem que por este conceito
de alma aumentasse num mínimo e pudesse ser determinado afirmativamente. Estes juízos
indefinidos, em relação à circunscrição lógica, são realmente limitativos em relação à matéria
do conhecimento em geral, e por isto não devem omitir-se na tábua transcendental de todos
os momentos do pensamento nos juízos, porque a função exercida aqui pelo entendimento
quiçá possa ser importante no campo de seu conhecimento puro “a priori”.
3.° Todas as relações do pensamento são: a) do predicado ao sujeito; b) do princípio à
conseqüênc ia; c) do conhecimento dividido e de todos os membros da divisão entre si.
Na primeira espécie de juízo só se consideram os conceitos, na segunda os juízos, na
terceira muitos juízos relacionados uns com os outros. Esta proposição hipotética: se há uma
justiça perfeita o delinqüente será punido, contém propria mente a relação de duas
proposições que são: “há uma justiça perfeita” e “o delinquente será castigado”. Fica aqui
sem solução a verdade peculiar de cada uma destas proposições, pensando-se nesse juízo
somente na consequência.
Finalmente, o juízo disjuntivo contém uma relação de duas ou mais proposições entre
si; não de conseqüência mas de oposição lógica, no sentido de que a esfera de uma exclui a
esfera de outra. Contém ainda uma relação de comunidade enquanto juntas ambas as esferas
completam a do conhecimento próprio. Contém pois uma relação das partes da esfera de um
conhecimento, posto que a esfera de cada uma dessas partes é a parte complementar da outra
relativamente ao conjunto do conhecime nto próprio, por exemplo: “O mundo existe ou por
uma causa acidental, ou por uma necessidade interna, ou por uma causa externa.”
Cada uma destas quatro proposições compre ende uma parte da esfera do conhecimento
possível da existência do mundo em geral; todas juntas compõem a esfera total. Excluir o
conhecimento de uma dessas esferas é colocá-lo em uma das outras; pelo contrário, colocá-lo
em uma delas é excluí-lo das restantes. Há, pois, em um juízo disjuntivo uma certa
comunidade de conhecimentos que, excluindo-se reciprocamente uns e outros, de terminam
não obstante no todo o verdadeiro conhecimento, posto que tomando-os em conjunto,
constituam o objeto total de um conhecimento particular dado. Creio ser suficiente o que fica
dito, para a compreensão do que segue.
4.° A modalidade dos juízos é uma função completamente particular dos mesmos, cujo
caráter proeminente é o fato de não entrarem no conteúdo dos juízos (conteúdo esse formado
pela quantidade, pela qualidade e pela relação), mas sim referir-se unicamente ao valor da
cópula em relação com o pensamento em geral. Juízos problemáticos são aqueles em que se
aceita a sua afirmação ou sua negação, somente como possíveis (voluntárias); assertóricos
são aqueles que são considerados como reais (verdadeiros); apoditicos, aqueles cuja
afirmação ou negação são ne cessárias. Assim, os dois juízos cuja relação constitui o juízo
hipotético, (“antecedens et conseqüens”), e os que por sua reciprocidade formam o disjuntivo
(membros da divisão), são ambos somente problemáticos.
No exemplo precedente, o juízo “se há uma justiça perfeita” não está posto
assertoricamente, mas somente pensado como um juízo arbitrário, que pode ser admitido por
qualquer um, não havendo senão a conseqüência como assertórica. Donde se segue que tais
juízos podem ser manifestamente falsos e, não obstante, tomados problematicamente, servir
de condições ao conhecimento da verdade. Assim este juízo: “o mundo é o efeito de um cego
azar”, não tem, no julgamento disjuntivo, senão uma significação problemática, isto é,
qualquer um poderia admiti-lo por um momento; e, portanto (como indicação de uma falsa
rota no número de todas aquelas que se pode seguir), serve para achar o verdadeiro caminho.
A proposição problemática é aquela que não exprime senão uma possibilidade lógica
(que não é objetiva), quer dizer, uma Livre escolha que se poderia fazer como valível, ou um
ato puramente arbitrário em virtude do qual se admitiria no entendimento; a proposição
assertórica anuncia uma realidade ou verdade, quase o mesmo que em um raciocínio
hipotético no qual o antecedente é problemático na maior, assertórico na menor e mostra que
a proposição se acha ligada com o entendimento segundo as leis que a regem.
A proposição apodítica concebe a proposição assertórica como determinada por estas
leis mesmas do entendimento e, afirmando, por conseguin te, “a priori”, manifesta em certa
maneira uma necessidade lógica. Estas três funções de modalidade podem ser designadas
“como momentos do pensamento em geral”, porque tudo se une aqui gradualmente ao
entendimento, de tal sorte, que o que antes se julgava como problemático, toma-se depois
assertoricamente como verdadeiro, para concluir, por fim, por uni-lo inseparavelmente com o
entendimento, quer dizer, por afirmá-lo como necessário e como apodítico.
Terceira Seção
10
Dos conceitos puros do entendimento ou categorias
A Lógica geral abstrai, como já dissemos, toda a matéria do conhecimento e espera que
lhe sejam dadas representações de outra parte, de onde quer que seja, para convertê-las em
conceitos mediante a análise. A Lógica transcendental, pelo contrário, tem por objeto uma
diversidade de elementos sensíveis “a priori”, que lhes oferece a Estética transcendental para
servir de matéria aos conceitos puros do entendimento, e sem o qual careceria a Lógica de
objeto, sendo por conseguinte completamente vazia.
O espaço e o tempo contêm, certamente, uma diversidade de elementos da intuição pura
“a priori”; mas, sem embargo, pertencem à condicionalidade receptiva do nosso espírito, sob
a qual unicamente podem receber-se as representações dos objetos e por conseguinte afeta
sempre também ao seu conceito. Mas a espontaneidade de nosso pensamento exige para fazer
desta diversidade um conhecimento, que primeiramente tenha sido percorrida, recebida e
enlaçada de certa maneira. Esta operação denomina-a síntese.
Entendo por síntese, em sua mais alta significação, a operação de reunir as
representações umas com as outras e resumir toda a sua diversidade em um só conhecimento.
Esta síntese é pura, quando a diversidade não é empírica, mas dada “a priori” (como a do
espaço e do tempo). As representações devem ser anteriores a toda análise, e não há conceitos
cuja matéria possa ser explicada analiticamente.
Mas a síntese de uma diversidade (seja dada a priori" ou “a posteriori”) produz desde
logo um conhecimento que em seu princípio pode ser in forme e confuso e que, por isso
mesmo, necessite de análise; mas a síntese é, não obstante, a que propriamente junta os
elementos para o conhecimento e os reúne de certa maneira para dar-lhes conteúdo; é, pois, o
primeiro a que devemos dedicar nossa atenção quando queremos julgar a origem de nossos
conhecimentos.
É a síntese em geral, como proximamente ve remos, a simples obra da imaginação, quer
dizer, uma função cega, ainda que indispensável, da alma, sem a qual não teríamos
conhecimento de nada, função de que raras vezes temos consciência. Mas é uma função que
pertence ao entendimento, e que é a única que nos procura o conhecimento propriamente dito,
o reduzir esta síntese a conceitos.
A síntese pura, representada geralmente, nos dá o conceito intelectual. Mas entendo por
síntese pura, a que se funda em um princípio da unidade sintética “a priori”. Assim nossa
numeração (o que se nota melhor ainda nos números elevados) é uma síntese segundo
conceitos, porque tem lugar segundo um princípio comum de unidade (p. ex.: o decimal). Sob
esse conceito é necessária a unidade na síntese da diversidade. Podem submeter-se, mediante
a análise, diferentes representações a um só conceito, assunto de que se ocupa a Lógica geral.
A Lógica transcendental, pelo contrário, ensina a submissão aos conceitos, não das
representações, mas da síntese pura das representações.
O que primeiramente nos deve ser dada “a priori”, para facilidade do conhecimento de
todos os objetos, é a diversidade de elementos da intuição pura; a síntese desta diversidade
pela imaginação é o segundo, ainda que, todavia, não dê conhecimento nenhum. Os conceitos
que dão unidade a esta síntese pura, e que consistem unicamente na representação desta
unidade sintética necessária, são a terceira condição para o conhecimento de um objeto
qualquer e assentam no endendimento.
A mesma função que dá unidade às diferentes representações, em um só juízo, é a que
dá também unidade à simples síntese de diferentes repre sentações em uma só intuição, que,
em sentido geral, denomina-se conceito puro do entendimento. Exercendo precisamente o
entendimento às mesmas operações, em virtude das quais dá aos conceitos a forma lógica de
um juízo, mediante a unidade analítica, introduz também uma matéria transcendental em suas
representações mediante a unidade sintética dos elementos diversos na in tuição em geral. Por
esta razão, se chamam conceitos puros intelectuais que se referem “a priori”, aos objetos, o
que não pode fazer a Lógica geral. De modo que há tantos conceitos puros de entendimento,
que se referem “a priori” aos objetos da intuição em geral como funções lógicas segundo a
precedente tabela em todos os juízos possíveis. Porque o entendimento se acha
completamente esgotado e toda a sua faculdade perfeitamente re conhecida e medida nessas
funções. Denominaremos a esses conceitos categoriais, seguindo a Aristóteles, pois igual é o
nosso fim, embora haja muita diferença na execução.
Tábua das Categorias
1
DE QUANTIDADE
Unidade
Pluralidade
Totalidade
2
DE QUALIDADE
Realidade
Negação
Limitação
3
DE RELAÇÃO
Substância e acidente
Causalidade e dependência
(Causa e efeito)
Comunidade
(Reciprocidade entre agente e
paciente)
4
DE MODALIDADE
Possibilidade — Impossibilidade
Existência — Não -existência
Necessidade — Contingência
Esta é, pois, a classificação de todos os conceitos originalmente puros da síntese, que o
entendimento contém em si “a priori” e pelos quais é um entendimento puro somente: só por
eles pode compreender algo na diversidade da intuição, quer dizer, pode pensar o objeto. Esta
divisão é sistematicamente deduzida de um princípio comum, a saber: da faculdade de julgar,
que é o mesmo que a faculdade de pensar. Não é, pois, esta divisão uma rapsódia procedente
de uma indagação fortuita e sem ordem dos conceitos puros de cuja perfeição não se pode
estar certo, por haver sido formada por indução, sem pensar que obrando deste modo não se
sabe nunca por que estes conceitos, e não outros, são inerentes ao entendimento puro.
O propósito de Aristóteles, ao buscar estes conceitos fundamentais, era digno de um
homem tão elevado. Mas como ele não tinha um princípio, recolhia -os conforme se
apresentavam e reuniu primeiramente dez, a que chamou categorias (predicamentos). Depois
acreditou encontrar todavia outros cinco e os aditou aos precedentes com o nome de póspredicamentos. Mas sua tábua continuou sendo imperfeita.
Ademais, entre as suas categorias há alguns modos da sensibilidade pura (quando, “ubi,
situs”, o mesmo que “prius, simil”) e também um modo empírico (“motus”) que não pertence
de modo algum a esta tábua genealógica do entendimento. Contava também entre os
conceitos primeiros os derivados (“actio, passio”), faltando por outro lado alguns dos
conceitos primeiros.
É preciso notar quanto aos conceitos primitivos que as categorias, como conceitos
verdadeiramente fundamentais do entendimento puro, possuem também os seus derivados
não menos puros e que não podem de modo algum omitir-se em um sistema completo de
Filosofia transcendental mas limito-me a mencioná-los neste ensaio puramente crítico.
Seja -me permitido chamar a esses conceitos puros do entendimento, mas derivados, os
predicáveis do entendimento puro (por oposição aos predicamentos). Uma vez de posse dos
conceitos primitivos e originais é fácil obter os derivados e subalternos, e fica então a árvore
genealógica do entendimento puro completamente traça da. Não me proponho aqui tratar da
totalidade de um sistema mas unicamente de seus princípios, reservo-me este complemento
para outro trabalho.
Mas isto pode facilmente conseguir-se tomando manuais ontológicos e aditando, por
exemplo: à categoria de causalidade, os predicados de força, de ação, de paixão; à de
comunidade, os predicáveis de presença, de oposição; à de modalidade, os predicáveis de
nascimento, morte, de mudança, e assim sucessivamente. Ao combinar as categorias entre si
ou com os modos da pura sensibilidade, resultam grande número de conceitos derivados “a
priori”. Ainda que sua enumera ção fosse uma obra útil e agradável, podemos escusar-nos
desse trabalho.
Omito intencionalmente a definição destas categorias neste tratado, ainda que bem o
pudesse fazer. Analisarei estes conceitos mais adiante tão fundamentalmente como exige a
metodologia que me ocupa. Em um sistema da razão pura, seriam exigíveis essas definições
com o pleno direito; mas aqui não fariam mais que fazer perder a atenção para o ponto capital
da indagação, porque produziriam dúvidas e objeções que sem faltar ao nosso objeto
essencial podemos relegar para outro trabalho.
Resulta claramente do pouco que temos dito que é possível e fácil formar um
vocabulário completo dos conceitos puros contendo todas as explicações necessárias.
Disposta a fôrma, só resta enchê-la: e uma Tópica sistemática como a atual indica facilmente
o lugar que propriamente pertence a cada conceito e faz ao mesmo tempo notar os que ainda
estão vazios.
* * *
11
Podem fazer-se sobre esta tábua das categorias considerações mui curiosas, suscetíveis
de proporcionar-nos talvez conseqüências mui importantes para a forma científica de todos os
conhe cimentos racionais. Com efeito, é fácil compreender que esta tábua serve
extraordinariamente para a parte teórica da Filosofia e é indispensável para o plano completo
de uma ciência, enquanto tal ciência se baseie em princípios “a priori” e para dividi-la
matematicamente segundo princípios determinados.
Basta para convencer-se disto pensar que esta tábua contém completamente todos os
conceitos elementares do entendimento e também a forma do sistema dos mesmos na
inteligência humana, e que, por conseguinte, nos indica todos os momentos de uma ciência
especulativa projetada assim como também sua ordenação, como já provei em outra parte.
Eis aqui algumas dessas observações.
Primeira observação: Esta tábua de categorias, que compreende quatro classes de
conceitos, divide-se primeiramente em duas partes, das quais a primeira se refere aos objetos
da intuição (pura ou empírica) e a segunda à existência destes obje tos (seja em relação entre
si ou com o entendimento).
Denominaria à primeira classe destes conceitos categorias matemáticas e, à segunda,
categorias dinâmicas. Só a segunda classe possui corre lativos, enquanto que a primeira carece
dos mesmos. Esta diferença deve, sem embargo, ter uma razão na natureza do entendimento.
Segunda observação: Em cada classe é o mesmo número das categorias, a saber, três: o
que não pode menos atrair a atenção, pois que toda outra divisão por conceitos “a priori”
deve ser uma dicotomia. Ainda pode aditar-se a isto, que a terceira categoria resulta sempre
da união da primeira com a segunda de sua classe.
Assim, a totalidade é a pluralidade conside rada como unidade; a limitação, a realidade
em união com a negação; a comunidade, a causalidade de uma substância determinada por
outra que ela por seu turno determina, e, finalmente, a necessidade, a existência dada pela
mesma possibilidade. Mas não se pense por isto que a terceira categoria é um conceito
simplesmente derivado do entendimento puro e que não seja um conceito primitivo do
mesmo. Porque a união da primeira e da segunda categorias para produzir a terceira exige um
ato especial do entendimento que é distinto dos que têm lugar na primeira e na segunda.
Assim, o conceito de um número (que pertence à categoria de totalidade) não é sempre
possível ali donde se encontrem os conceitos de pluralidade e de unidade (por exemplo, na
representação do infinito); nem porque eu una o conceito de causa e de substância se entende
imediatamente a in fluência, quer dizer, como uma substância pode ser causa de algo em outra
substância. Claramente se vê que para isto é necessário um ato especial do entendimento; e
assim sucede com todas as restantes.
Terceira observação: Tão-só em uma categoria de comunidade, compreendida no título
III, não é tão evidente como nas demais sua conformidade com a forma do juízo disjuntivo
que lhe corresponde na tábua das funções lógicas.
Para certificar-se desta conformidade, é pre ciso notar que em todos os juízos
disjuntivos sua esfera (o conjunto de tudo o que é compreendido em um destes juízos) é
representada como um todo dividido em partes (os conceitos subordinados); mas como
nenhuma destas partes se acha contida nas outras, devem ser concebidas como coordenadas e
não como subordinadas, de tal modo que se determinem entre si, não sucessiva e
parcialmente como em uma série, mas mutuamente como em um agregado, de modo que,
afirmado que seja um membro da divisão, exclua aos restantes, e assim respectivamente.
Concebendo-se, pois, semelhante enlace em um todo de coisas, uma dessas coisas não
está, com efeito, subordinada à outra como causa de sua existência, mas ambas estão
coordenadas ao mesmo tempo e reciprocamente como causas uma da outra com referência a
sua determinação (p. ex.: em um corpo cujas partes se atraem e re pelem mutuamente). Tal
enlace é diferente do que se acha na simples relação de causa e efeito (de. fundamento e
conseqüência) no qual a conseqüência não determina por sua vez reciprocamente o princípio,
e por essa razão não forma um todo com ele (como o Criador com o Mundo).
O processo do entendimento quando se representa a esfera de um conceito dividido, é o
mesmo que segue quando pensa uma coisa como divisível: e do mesmo modo que no
primeiro caso os membros da divisão se excluem uns aos outros, ainda que estejam, todavia,
reunidos em uma esfera, se representam as partes de uma coisa divisível, como tendo cada
uma (como substância) uma existência independente das outras, e reunidas, não obstante, em
um todo.
* * *
12
Encontra -se também na Filosofia transcendental dos antigos um capitulo que contém
conceitos puros do entendimento, que, embora não fossem incluídos entre as categorias, eram
tidos como devendo ter o valor de conceitos “a priori” de obje tos. Mas se isso fosse assim,
seria aumentado o número das categorias, o que não pode ser. Esses conceitos são expressos
por esta proposição tão célebre entre os escolásticos: “quod libet ens est unum, verum,
bonum”.
Embora no uso este princípio tenha levado a singulares conseqüências (quer dizer, a
proposições evidentemente tautológicas), se bem que em nossos dias somente por
conveniência se faz menção do mesmo na Metafísica; todavia um pensamento que resistiu
por tão longo tempo, por vazio que pareça, merece sempre uma pesquisa de sua origem, e
justifica a suposição que tenha o seu próprio fundamento em alguma regra do entendimento
que, como sucede com freqüência, teria sido somente mal interpretada. Esses pretendidos
predicados transcendentais das coisas não são nada mais que exigências lógicas e critérios de
todo conhecimento das coisas em geral, à qual dão por fundamento as categorias da
quantidade, quer dizer, da unidade, da pluralidade e da totalidade.
Estas categorias, que devem ser consideradas com um valor material como condições
para a possibilidade das coisas, eram usadas exclusivamente pelos antigos em sentido formal
como exigências lógicas de todo conhecimento e por sua vez convertidos estes critérios do
pensamento, de uma maneira inconseqüente, em propriedades das coisas mesmas.
Em todo conhecimento de um objeto existe propriamente a unidade do conceito que
pode chamar-se unidade qualitativa Considerando somente sob ela o conjunto dos elementos
diversos do conhecimento, como, por exemplo, a unidade do tema em um drama, em um
discurso ou em uma fábula. Em segundo lugar, há que considerar a verdade em relação às
conseqüencias. Quantas mais conseqüencias resultarem de um conceito dado, tantos mais
caracteres há de sua realidade objetiva. Isto poderia chamar-se a pluralidade qualitativa dos
signos que pertencem a um conceito comum (sem que sejam pensados como quantidades).
Finalmente, em terceiro lugar, é preciso ter em conta a perfeição, que consiste em que a
pluralidade por sua vez se refira à unidade do conceito e que concorde completa e unicamente
com este, o que se pode chamar integridade qualitativa (tota lidade). Donde resulta que estes
três critérios lógicos da possibilidade dos conhecimentos em geral transformam aqui por meio
da qualidade de um conhecimento tomada como princípio, às três categorias do quantum,
deve tomar-se como constantemente homogênea e somente com o fim de enlaçar na
consciência elementos heterogêneos de conhecimento.
O critério da possibilidade de um conceito (não do objeto mesmo) é a definição, da qual
a unidade do conceito, a verdade de tudo aquilo que pode ser derivado imediatamente dele , e
finalmente a inte gridade do mesmo resulta, são indispensáveis para a formação do conceito
total. Assim, também, o critério de uma hipótese consiste na inteligibilidade do princípio de
explicação admitido ou em sua unidade (sem hipótese mediadora); na verdade das
conseqüencias derivadas, concordâncias destas com a experiência, e finalmente na
integridade do princípio de explicação com respeito a essas conseqüencias que deixam no
mesmo estado o que se tomou como hipótese, e para o que se pensou sinte ticamente “a
priori” o procuram de novo analiticamente, “a posteriori”, conformando-se ade mais com eles.
Os conceitos de unidade, verdade e perfeição, não completam de modo algum a lista
transcendental das categorias como se fosse defeituosa, mas a relação desses conceitos a
objetos, sendo posta de lado, o uso que faz dela o espírito entra nas regras lógicas gerais do
acordo do conhecimento consigo mesmo.
CAPITULO II
Dedução dos Conceitos Puros do Entendimento
Primeira Seção
13
Dos princípios de uma dedução transcendental em geral
Quando os jurisconsultos falam de direito e de usurpações, distinguem no caso a
questão do direito “quid juris”, da questão de fato “quid facti”; e, como exigem uma prova de
cada uma delas, denominam dedução à primeira, que é aquela que deve demonstrar o direito
ou a legitimidade da pretensão (dedução).
Servimo-nos de um grande número de conceitos empíricos sem achar oposição alguma;
e nos cremos autorizados também sem dedução para atribuir-lhes um sentido imaginado,
porque sempre temos à mão a experiência como para demonstrar a sua realidade objetiva.
Por outro lado existem conceitos usurpados como os de destino, etc., que circulam com
uma aquiescência quase geral, contra os quais ocorre às vezes perguntar: “quid juris?”, não
sendo então pequeno o obstáculo que oferece ao deduzi-los, visto como não se pode alegar
nenhum princípio claro de direito, seja da experiência, seja da razão, que justifique o seu uso.
Mas entre os numerosos conceitos que formam o complicadíssimo tecido do
conhecimento humano, alguns há destinados a um uso puro “a priori” (completamente
independentes de toda experiência) e cujo direito necessita sempre uma dedução porque os
quadros tomados da experiência não bastam para estabelecer a legitimidade de um tal uso,
sendo, não obstante, preciso saber como esses conceitos podem referir-se a objetos que não
procedem de experiência alguma.
Denomino dedução transcendental à explicação do modo como se referem a objetosconceitos “a priori”, e a distingo da dedução empírica que indica a maneira como um
conceito foi adquirido por meio da experiência e de sua reflexão, e que, portanto, não
concerne à sua legitimidade, mas ao fato mesmo de que resulta a aquisição deste conceito.
Temos já duas espécies bem distintas de conceitos, mas que têm de comum o referir-se
completamente “a priori” a objetos, a saber: os conceitos de espaço e de tempo, como formas
da sensibilidade, e as categorias como conceitos do entendimento.
Querer buscar neles uma dedução empírica, fora vão intento, porque o distintivo que os
caracteriza se refere aos seus objetos sem haver tomado da experiência qualquer elemento
para a sua representação. Se pois uma dedução desses conceitos é necessária cumpre que ela
sempre seja transcendental. Entretanto, desses conceitos, como de todo conhecimento, pode -
se procurar experiência, na falta do princípio da sua possibilidade, as causas ocasionais de sua
produção; com efeito, as impressões dos sentidos nos oferecem primeiro motivo para
desenvolver toda nossa faculdade de conhecer e para constituir as experiências.
Contém, pois, a experiência dois elementos bem distintos, a saber: uma matéria para o
conhecimento, que oferecem os sentidos, e certa forma ordenadora desta matéria, procedente
da fonte interna da intuição e do pensamento puro, que, unicamente motivada pela primeira,
produz os conceitos. É sumamente útil indagar os primeiros esforços da nossa faculdade de
conhecer para elevar-nos das percepções particulares a conceitos gerais.
O célebre Locke foi quem primeiro devassou esse caminho. Mas é impossível
conseguir por esse meio uma dedução de conceitos puros “a priori”, pois não está de modo
algum dentro desse caminho, porque relativamente ao seu uso futuro, que deve ser totalmente
independente da experiência, necessitam mostrar um outro ato de nascimento que o faz
derivar da experiência. Essa tentativa de derivação fisiológica, que não é, propriamente
falando, uma dedução, porque diz respeito a uma questão de fato, eu a denominei explicação
da posse de um conhecimento puro. É claro, portanto, que só pode haver desses conceitos
senão por uma dedução transcendental, e de nenhum modo uma dedução empírica, e que esta
não é, relativamente aos conceitos puros “a priori”, senão uma vã tentativa, de que se pode
ocupar aquele que não compreendeu a natureza própria desta espécie de conhecimento.
Mas, ainda que não haja mais do que uma maneira possível de dedução do
conhecimento puro “a priori”, a saber: a que se segue por via transcendental, disto não resulta
que ela seja absolutamente necessária. Anteriormente seguimos os conceitos de espaço e
tempo até as suas fontes, mediante uma dedução transcendental, e determinamos e
explicamos “a priori” seu valor objetivo; não obstante, a Geometria segue os seus passos
seguros por conhecimentos puramente “a priori", sem necessidade de pedir um certificado à
Filosofia para a pura e legítima origem de seu conceito fundamental de espaço.
Entretanto, nesta ciência o uso do conceito alcança somente ao mundo exterior sensível
de que espaço é a forma pura de sua intuição. Tem, por conseguinte, todo conhecimento
geométrico, uma existência imediata, porque ela se funda sobre uma intuição “a priori” e que
os objetos são dados a priori” (quanto à forma) na intuição pelo conhecimento mesmo.
Os conceitos puros do entendimento, pelo contrário, fazem nascer em nós uma
indispensável necessidade de procurar não somente sua dedução transcendental, mas também
aquela do espaço. Com efeito, como os predicados que se atribuem aqui aos objetos não são
aqueles da intuição e da sensibilidade, mas se relacionam a objetos em geral,
independentemente de todas as condições da sensibilidade; e como eles não são fundados
sobre a experiência, não podem mostrar na intuição “a priori” nenhum objeto sobre o qual se
funde a sua síntese anteriormente a toda experiência.
Daqui resulta que não somente fazem suspeitar com respeito ao seu valor objetivo e aos
limites de sua aplicação, como também convertem em duvidoso o conceito de espaço pela
inclinação que tem em usá-lo além das condições da intuição sensível. É, portanto, necessária
a presente dedução transcendental do dito conceito, O leitor deve estar convencido da
indispensável necessidade de semelhante dedução transcendental antes de dar um só passo no
campo da razão pura; porque, de outro modo, procederia cegamente e, depois de haver
vagado de um ponto para outro, voltaria à ignorância de onde partira. Mas é também preciso
que antes dê conta das suas naturais dificuldades, para que se não queixe depois da
obscuridade em que o assunto mesmo está envolvido, e para que não desfaleça muito cedo
ante os obstáculos a transpor, porque se trata de renunciar completamente a toda pretensão
com respeito à razão pura, em seu campo mais atraente, a saber: além dos limites de toda
experiência possível, encaminhando esta indagação crítica à sua completa perfeição.
Não nos foi difícil fazer compreender como os conceitos do espaço e do tempo, ainda
que conhecimentos “a priori”, devem, necessariamente, referir-se a objetos, e como
possibilitam um conhecimento sintético dos mesmos, independentemente de toda
experiência. Efetivamente, como somente mediante essas formas puras da sensibilidade pode
oferecer-se-nos um objeto (quer dizer, ser objeto da intuição empírica), resulta que o espaço e
o tempo são intuições puras que contêm “a priori” as condições de possibilidade dos objetos
como fenômenos, e tem a síntese nas mesmas um valor objetivo.
Não representam, pelo contrário, as categorias do entendimento, as condições sob as
quais os objetos se dão na intuição, e, por conseguinte, podem aparecer como tais objetos sem
que necessariamente tenham que relacionar-se com as funções do entendimento e sem que
este contenha as condições “a priori” dos mesmos. Daqui resulta uma dificuldade, que não
achamos no campo da sensibilidade, a de saber como as condições subje tivas do pensar
devem ter um valor objetivo, quer dizer, dar as condições de possibilidade de todo
conhecimento de objetos, porque, indubitavelmente, podem oferecer-se fenômenos na
intuição sem as funções do entendimento.
Tomo por exemplo o conceito de causa, que significa uma maneira especial de síntese,
na qual se une algo A, segundo uma regra, a B, que lhe é totalmente diferente. Não se vê
claramente “a priori” porque os fenômenos devam conter antes algo semelhante (porque as
experiências não o provariam, posto que o valor objetivo deste conceito deve poder-sé
demonstrar “a priori”), se o referido conceito de causa é completamente vazio, e em parte
alguma pode achar-se objeto entre os fenômenos. É evidente que os objetos da intuição
sensível devem conformar-se com as condições formais da sensibilidade, existentes “a priori”
em nosso espírito, pois que de outra maneira não seriam objetos para nós outros; mas é dificil
conceber porque esses objetos devem além disso estar de acordo com as condições que o
entendimento necessita para a compreensão sintética do pensar.
Bem pudera ser que os fenômenos fossem de tal natureza que o entendimento não os
achasse de modo algum conforme com as condições de sua unidade, e que tudo estivesse em
tal confusão que, por exemplo, na sucessão dos fenômenos não existisse nada capaz de
fornecer uma regra de síntese, correspondente ao conceito de causa e efeito, e que fosse
portanto dito conceito completamente vão, nulo e sem significação.
Não ofereceriam, por isto, os fenômenos meros objetos para a intuição, porque não
necessito de maneira alguma das funções de pensar.
Pretendendo evitar o trabalho destas investigações dizendo-se que a experiência
apresenta sem cessar exemplos desta espécie de regularidade nos fenômenos, que nos
fornecem suficientemente a ocasião de tirar delas o conceito de causa e confirma ao mesmo
tempo o valor objetivo do mesmo conceito, olvida-se que o conceito de causa não pode
produzir-se de modo algum desta maneira e que, ou deve achar-se fundado comple tamente “a
priori" no entendimento, ou abandonar-se totalmente como uma pura quimera. Porque o tal
conceito exige necessariamente que A seja de tal espécie, que o B siga mediante uma re gra
absolutamente geral.
Os fenômenos apresentam casos de que se pode tirar uma regra segundo a qual
acontece algo comumente, mas jamais se deduzirá daqui que a conseqüência seja necessária.
Na síntese de causa e efeito há também uma dignidade que é impossível exprimir
empiricamente, a saber: que o efeito não se adita simplesmente à causa, mas, por esta mesma,
se vê posto e produzido.
A estrita universalidade da regra não é tampouco uma propriedade das regras empíricas,
porque não pode receber na indução mais do que uma generalidade comparativa, quer dizer,
uma extensa aplicação. O uso dos conceitos puros do entendimento variaria totalmente se tãosó se quisesse empregá-los como produtos empíricos.
* * *
14
Passagem à dedução transcendental das categorias
Somente há dois casos em que a representação sintética e seus objetos podem coincidir,
relacionar-se necessariamente, e, por assim dizer, encontrar-se. Ou o objeto torna possível a
representação, ou a representação torna possível o obje to. No primeiro caso, a relação é
somente empírica e a representação é impossível “a priori”; tal é o caso dos fenômenos
relativamente àqueles dos seus elementos pertencentes à sensação. No segundo caso, como a
representação não dá por si mesma a existência ao seu objeto (porque não se fala aqui da
causalidade que pode ter mediante a vontade, ela determina, no entretanto, o objeto “a priori”,
neste sentido de que ela só pode permitir conhecer qualquer coisa como objeto.
Ora, há duas condições para a possibilidade do conhecimento dos objetos: primeira,
intuição, pela qual o objeto é dado como fenômeno; a seguir o conceito, pelo qual se pensa
um objeto que corresponde a essa intuição. Mas é claro, segundo o que se disse, que a
primeira condição, aquela sob a qual não podemos perceber por intuição os objetos, serve em
realidade “a priori” no espírito de fundamento aos objetos, quanto à sua forma. Com esta
condição formal da sensibilidade, concordam, pois, necessariamente, todos os fenômenos,
posto que só possam oferecer mediante ela, quer dizer, perceber-se e dar-se empiricamente.
Agora se trata de saber se os conceitos “a prio ri” precedem também como condições
para perceber ou pensar algo como objeto, do que se deduzirá que todo conhecimento
empírico de objetos está de acordo necessariamente com esses conceitos, porque sem a
suposição destes nada é possível como objeto da experiência. Ora, toda experiência contém
além da intuição dos sentidos, pela qualquer coisa é dada, um conceito de um objeto dado na
intuição ou nos aparecendo. Há pois conceitos de objetos em geral que servem, como
condições “a priori”, de fundamento a todo conhecimento experimental.
Conseguintemente, o valor objetivo das categorias como conceitos “a priori”, apóia -se
em que só elas tornam possível a experiência (quanto o foram do pensamento). Referem-se,
pois, necessariamente, “a priori”, aos objetos da experiência, posto que somente mediante
elas em geral é que se pode pensar algo empírico.
Tem, pois, a dedução transcendental de todos os conceitos “a priori” um princípio com
o qual deve dirigir-se toda investigação, a saber: que esses conceitos devem reconhecer-se
como condições “a priori” da possibilidade da experiência (seja da intuição, ou do
pensamento, que se ache nela). Os conceitos que fornecem o fundamento objetivo da
possibilidade da experiência são por isso mesmo necessários.
O desenvolvimento da experiência onde eles se acham não é a sua dedução (mas sim
seu conhecimento) pois de outro modo só seriam acidentais. Sem esta primitiva relação com
uma experiência possível na qual se apresentam todos os objetos de conhecimento, não
poderia compreender-se a rela ção desses conceitos com um objeto qualquer.
Por não haver feito esta observação, o céle bre Locke encontrou na experiência
conceitos puros do entendimento, que fez derivar da própria experiência, e foi, portanto, tão
inconseqüente, que procurou conhecimentos que ultrapassam os limites da experiência.
David Hume reconhece que, para poder conseguir este último, era preciso que esses
conceitos tivessem uma origem “a priori”. Mas não pôde explicar como é possível que a
inteligência conceba como necessariamente ligados no objeto conceitos que o não são em si,
no entendimento, e não lhe ocorreu no espírito que talvez o entendimento fosse, por estes
conceitos mesmos, o autor da expe riência que lhe fornece os seus objetos, acontece que os
deduziu, premido pela necessidade, da experiência (quer dizer, dessa necessidade subjetiva
que resulta de qualquer associação freqüentemente repetida na experiência, e que se acaba
por ter erradamente como objetiva, em uma palavra, do hábito).
Mas a seguir se revelou conseqüente, conside rando ser impossível sair dos limites da
experiência com conceitos dessa natureza ou com os prin cípios a que dão lugar. Infelizmente
esta origem empírica, a que Locke e Hume recorreram, está refutada pelo fato de não poder
conciliar-se com a realidade dos conhecimentos científicos “a priori”, que possuímos, como
p. ex.: os das matemáticas puras e da Física geral.
O primeiro destes dois homens ilustres abriu todas as portas ao exagero, porque a razão,
quando uma vez ela pensa ter de seu lado o direito, não se inibe mais por vagos conselhos de
moderação; o segundo mergulhou completamente no ceticismo quando creu ter demonstrado
que aquilo que se toma pela razão não é mais que uma ilusão geral de nossa faculdade de
conhecer. Chegamos, assim, ao ponto de ver se podemos ensaiar a condução da razão
humana por entre esses dois escolhos e intentar se podemos demonstrar seus de terminados
limites, conservando, todavia, aberto todo o campo de sua legítima atividade. Antes de sejo
recordar somente a definição das categorias.
As categorias são conceitos de um objeto em geral, por meio dos quais a intuição desse
objeto é considerada como determinada relativamente a uma das funções lógicas do
julgamento. Assim, função de julgamento categórico é aquela de rela ção do sujeito com o
predicado, como quando digo: todas as coisas são divisíveis. Mas, do ponto de vista do uso
puramente lógico do entendimento, não se determina a qual dos dois conceitos quer-se
atribuir a função de sujeito, e ao qual a de predicado.
Com efeito, pode -se dizer também: algo divisível é um corpo. Pelo contrário, quando
faço entrar na categoria de substância o conceito de um corpo, determina-se por isso que a
intuição empírica desse corpo na experiência não pode jamais ser considerada como sujeito e
nunca como predicado, e assim o mesmo para as restantes categorias.
Segunda Seção
Dedução Transcendental dos Conceitos Puros Intelectuais
A possibilidade de uma síntese em geral
A diversidade das representações pode dar-se em uma intuição que é puramente
sensível, quer dizer, que não é mais do que uma receptividade e a forma desta não pode ser
fornecida pelos sentidos, e, consequentemente tampouco pode encerrar-se na forma pura da
intuição sensível, porque é um ato espontâneo da faculdade representativa Como se deve
chamar esta faculdade de entendimento, para distingui-la da sensibilidade resulta sempre que
é um ato intelectual toda ligação, consciente ou inconsciente, quer abranja intuições ou
conceitos diversos, quer sejam ou não sensíveis essas intuições.
Designaremos este ato sob o nome comum de síntese para fazer notar com isto que não
podemos representarnos nada ligado a um objeto sem tê-lo ligado antes no entendimento, e
que, de todas as representações, a ligação é a única que não nos pode ser fornecida por
objetos, mas somente pelo sujeito mesmo, porque ela é um ato da sua espontaneidade. É fácil
notar aqui que este ato deve ser originariamente um e aplicar-se igualmente a toda ligação, e
que a decomposição, a análise, que parece ser o seu contrário, a supõe sempre; porque onde o
entendimento nada ligou, ele não saberá desligar, Porque é só por seu intermédio que pôde
dar-se como ligado aquilo que foi dado como tal à faculdade representativa.
Mas o conceito de ligação comporta, além daquele da diversidade e da síntese dessa
diversidade, aquele da unidade dessa diversidade. A ligação é a representação da unidade
sintética da diversidade. A representação dessa unidade não pode, pois, resultar dessa ligação;
porquanto ao unir-se à representação da diversidade, torna possível o conceito de ligação.
Esta unidade que precede “a priori” a todos os conceitos de ligação, não é de modo algum a
categoria de unidade (§ 10); Porque todas as categorias se fundam sobre funções lógicas dos
nossos julgamento, e nesses julgamentos já está pensada uma ligação, conseguintemente, uma
unidade de conceitos dados.
A categoria pressupõe, portanto, a ligação. Cumpre procurar essa unidade (como
qualitativa, mais alta ainda), isto é, naquilo que contém o princípio mesmo da unidade de
diferentes conceitos no bojo dos julgamentos, e, por conseguinte, da possibilidade do
entendimento, mesmo sob o ponto de vista de seu uso lógico.
16
Da unidade primitivamente sintética da apercepção
O eu penso deve acompanhar todas as minhas representações; pois se fosse de outro
modo haveria em mim algo representado que não podia pensar-se e que equivaleria a dizer:
que a representação é impossível ou que pelo menos é para mim igual a nada. A
representação que pode dar-se antes de todo pensamento chama -se intuição. Toda diversidade
da intuição tem, pois, relação necessária com o eu penso no mesmo sujeito em quem se
encontra esta diversidade. Mas esta representação é um ato da espontaneidade, quer dizer,
que não se pode considerá-la como pertencente à sensibilidade.
Denomino-a apercepção pura para diferenciá-la da empírica, ou ainda também
apercepção primitiva por ser a consciência de si mesmo, que produzindo a representação eu
penso, que deve acompanhar todas as demais representações, e que em toda consciência é
sempre una e a mesma, não outra maior que por seu turno possa acompanhar a este.
Denomino também à unidade desta representação, unidade transcendental da
consciência, para indicar a possibilidade do conhecimento “a priori” que dali resulta. Porque
as diversas representações, dadas em certa intuição, não seriam todas juntas a minha
representação, se todas também não pertencessem a uma mesma consciência; quer dizer, que
como representações minhas (ainda que não tenha consciência delas como minhas) devem
conformar-se necessariamente com a condição, mediante a qual só podem coexistir em uma
consciência geral, pois de outro modo não poderiam pertencer-me. Desta primitiva liga ção
resultam muitas consequências.
Esta identidade permanente da apercepção de uma diversidade na intuição contém uma
síntese de representações, e só é possível mediante a consciência desta síntese; a consciência
empírica que acompanha diferentes representações está por si mesma disseminada e não tem
relações com a identidade do sujeito. Esta relação não se verifica só porque cada
representação é acompanhada da consciência; é preciso para aquilo que eu una uma à outra e
que eu tenha consciência dessa síntese.
Não é portanto senão sob a condição de poder ligar em uma consciência uma
diversidade de representações dadas que me é possível representar-me a identidade da
consciência nessas representações mesmas, quer dizer, que a unidade analítica da apercepção
não é possível senão na suposição de qualquer unidade sintética.(5)
Este pensamento de que “estas representações dadas na intuição me pertencem todas”, é
o mesmo que se dissesse: eu as reúno em uma consciência única, ou pelo menos posso reunilas; e ainda que esse pensamento não seja ainda a consciência das sínteses das representações,
pressupõe, não obstante, a sua possibilidade, quer dizer, que somente porque posso
compreender a diversidade das representações em uma consciência única, denomino a todas
minhas; pois se assim não fosse, seria meu eu tão diverso e extravagante como as
representações cuja consciência tenho.
É, pois, o princípio da identidade da apercepção mesma a unidade sintética da
diversidade das intuições dadas “a priori”. Dita apercepção precede “a priori” a todos os
meus pensamentos determinados. A ligação existe, pois, nos objetos e não pode tampouco
deriva r-se destes por percepção alguma, e receber-se depois no entendimento; mas ela é
unicamente uma operação do entendimento, que não é ele mesmo outra coisa que a fa culdade
de formar ligações “a priori”, e de conduzir a diversidade das representações dada s à unidade
da apercepção. Esse é o princípio mais ele vado de todo o conhecimento humano.
Este princípio da unidade necessária da apercepção é idêntico, e, por conseguinte, uma
proposição analítica; mas, não obstante, demonstra a necessidade de uma síntese da
diversidade dada em uma intuição, sem a qual a identidade permanente da consciência não
pode perceber.
Porque, pelo eu, como representação simples, não se dá diversidade alguma; o diverso
só pode dar-se na intuição, que é diferente dessa representação, não pode pensar-se senão
ligado com a consciência una. Um entendimento no qual toda diversidade se desse ao mesmo
tempo pela própria consciência, seria intuitivo; o nosso pode somente pensar e dele buscar a
intuição nos sentidos. Eu tenho pois consciência de um eu idêntico, relativamente à
diversidade das representações que me são dadas na intuição, porque as denomino todas,
minhas representações, e elas não constituem senão uma só.
Ora, isso equivale a dizer: eu tenho consciência de uma síntese necessária “a priori”
dessas representações, a que denomino unidade sintética primitiva da apercepção, sob a qual
estão todas as representações que se me dão, mas à qual devem também reunir-se por meio de
uma síntese.
17
O princípio da unidade sintética d a apercepção é o princípio supremo de todo uso do
entendimento
O princípio supremo da possibilidade de toda intuição com relação à sensibilidade era
segundo a Estética transcendental, o de que toda diversidade da intuição está submetida às
condições formais de espaço e tempo. O princípio supremo desta mesma possibilidade
relativamente ao entendimento é o de que toda a diversidade da intuição se acha submetida às
condições da unidade originariamente sintética da apercepção.(6)
Obedecendo ao primeiro destes princípios estão todas as diversas representações das
intuições enquanto nos são dadas, e enquanto podem ser ligadas em uma só consciência. Sem
isto nada se pode pensar nem conhecer porque as representações dadas, se não têm por
comum a todos o ato da apercepção eu penso, não poderão reunir-se em uma mesma
consciência. O entendimento, para falar geralmente, é a faculdade de conhecimentos. Estes
conhecimentos consistem na determinada relação de representações dadas com um objeto.
Um objeto é aquele em cujo conceito se reúne a diversidade de uma intuição dada. Ora, toda
reunião de representações exige a unidade da cons ciência na síntese dessas representações.
A unidade da consciência é pois aquilo que só constitui a relação das representações a
um obje to, quer dizer, seu valor objetivo; esta é a que forma conhecimentos dessas
representações, e nela descansa, e portanto é a possibilidade mesma do entendimento.
É, pois, o princípio da unidade sintética originária da apercepção o primeiro
conhecimento puro do entendimento, no qual se funda toda a aplicação ulterior deste, sendo a
um tempo independente de todas as condições da intuição sensível. Assim, a simples forma
das intuições exteriores, o espaço, não chega a ser um conhecimento; só da diversidade da
intuição “a priori” para um conhecimento possível.
Mas para conhecer qualquer coisa no espaço, por exemplo, uma linha, é preciso que eu
a trace, e, portanto, efetue sinteticamente uma ligação de terminada da diversidade, de tal
modo, que a unidade desta ação seja ao mesmo tempo a unidade da consciência (no conceito
de uma linha) e que por isso conheça um objeto (um espaço determinado).
A unidade sintética da consciência é, pois, uma condição objetiva de todo
conhecimento de um objeto, como também sob ela deve estar toda intuição para que possa ser
esta fora de mim um objeto; porque, de outro modo, sem esta síntese, o diverso não se
reuniria em uma mesma consciência.
Esta última proposição é, como se disse, analítica, ainda que faça da unidade sintética a
condição de todo pensamento; com efeito, expressa que todas as minhas representações, dada
uma intuição qualquer, devem sujeitar-se à condição pela qual somente posso atribuí-las a um
eu idêntico e, daqui, uni-las sinteticamente em uma só apercepção e compreendê-las na
expressão geral eu penso.
Mas este princípio não o é, todavia, para todo entendimento possível em geral, senão
exclusivamente para aquele por cuja apercepção pura não se deu ainda nada de diverso na
representação: eu sou. Um entendimento cuja consciência lhe desse ao mesmo tempo a
diversidade da intuição, cuja representação fizera existir os objetos destas representações, não
necessitaria um ato particular da síntese da diversidade para obter a unidade da consciência
como o que exige o entendimento humano, o qual pensa simplesmente, mas carece de poder
intuitivo. Porém para o entendimento humano é indispensável o primeiro princípio, de tal
sorte que não pode formar-se a mesma idéia de outro entendimento que se funde em intuição
sensível; mas que é, não obstante, de outra espécie que o que tem seu princípio no tempo e no
espaço.
18
Natureza da unidade objetiva da própria consciência
A unidade transcendental da apercepção é aquela por meio da qual o diverso dado em
uma intuição se reúne em um conceito do objeto. Por isto se chama objetiva e deve
distinguir-se da unidade subjetiva da consciência, que é uma determinação do sentido interno,
mediante a qual o diverso da intuição se dá empiricamente para reunir-se deste modo. Que eu
possa ser consciente, empiricamente desses elementos diversos como simultâneos ou como
sucessivos, depende de circunstâncias ou condições empíricas.
A unidade empírica da consciência, pela associação das representações, reporta -se a um
fenômeno e é contingente. Pelo contrário, a forma pura da intuição no tempo, como intuição
em ge ral contendo diversos elementos dados, é unicamente pela relação necessária da
diversidade da intuição a um só eu penso; e, por conseguinte, pela síntese pura do
entendimento que serve de fundamento “a priori” à síntese empírica.
Essa unidade só tem valor objetivo e a unidade empírica da apercepção, que não
examinamos aqui, não é mais do que uma derivação feita da primeira sob condições dadas em
conceito e só têm um valor subjetiv o. Usam uns a representação de certa palavra com uma
coisa, outros com outra, e a unidade da consciência no que é empírico, e em relação ao que é
dado, não possui um valor universal e necessário.
19
A forma lógica de todos os juízos consiste na unidade objetiva da apercepção dos
conceitos que neles se contêm
Jamais me satisfez a definição que os lógicos dão do juízo em geral como a
representação de uma relação entre dois conceitos. Sem discutir aqui com eles o imperfeito
daquela definição, somente aplicável em todo caso aos juízos categóricos e não aos
hipotéticos e disjuntivos (não contendo estes últimos relação entre conceitos, mas sim entre
os juízos mesmos), farei notar somente (sem atender às conseqüências inconvenientes que
este erro causou à lógica) (7) que sua definição não determina em que consiste essa relação.
Procurando determinar mais exatamente a relação dos conhecimentos dados em cada
julgamento, e distinguindo essa relação, própria do entendimento, daquele que se faz segundo
a lei da imaginação reprodutora (que só tem valor subjetivo), acho que um julgamento não é
mais do que uma maneira de conduzir conhecimentos dados à unidade objetiva da
apercepção. A função que preenche nesses julgamentos a cúpula é de distin guir a unidade
objetiva das representações dadas de sua unidade subjetiva.
Com efeito, ela designa a relação dessas representações com a apercepção originária e
sua unidade necessária, ainda que o julgamento em si mesmo seja empírico e, por
conseguinte, contin gente, como este exemplo: os corpos são pesados.
Não quero dizer com isso que essas representações se relacionam necessariamente
umas com as outras na intuição empírica, mas que se rela cionam mutuamente na síntese da
intuição, por meio da unidade necessária da aperc epção, quer dizer, segundo os princípios da
determinação obje tiva de todas as representações, pela qual podem resultar conhecimentos e
princípios que todos se derivam da unidade transcendental da apercepção.
Assim é, como desta relação pode nascer um juízo, quer dizer, uma relação que tem um
valor objetivo, e que se distingue suficientemente da relação dessas mesmas representações,
cujo valor é puramente subjetivo, p. ex.: conforme as leis da associação. Segundo estas
últimas, só poderia dizer: quando eu tenho um corpo, sinto a impressão de seu peso; mas não
poderia dizer: o corpo é pesado; o que aqui equivaleria a exprimir que essas duas
representações estão ligadas com o objeto, ou o que é o mesmo, que são independentes do
estado dos sujeitos e não estão simplesmente associadas na apercepção (por mais
freqüentemente que se repita).
20
Todas as intuições sensíveis são submetidas às categorias como as únicas condições
sob as quais o que existe nelas de diverso pode reunir-se à consciência una
A diversidade dada numa intuição sensível está sujeita necessariamente à unidade
primitiva da apercepção, pois só por esta é possível a unidade da intuição (§ 17). Mas o ato
do entendimento pelo qual a diversidade das representações dadas (sejam intuições ou
conceitos) se submete a uma apercepção em geral, é a função lógica dos juízos (§ 19).
Conseguintemente, toda diversidade, enquanto se verifica em uma só intuição empírica,
é determinada com relação a uma das funções lógicas do juízo, por meio da qual se leva esta
diversidade à consciência una. Mas as categorias são essas mesmas funções do juízo,
enquanto a diversidade de uma intuição dada é determinada por relação a essas funções.
A diversidade de uma intuição dada se acha, pois, sujeita, também, às categorias
necessaria mente.
21
Observação
Uma diversidade contida em uma intuição que denomino minha, representa -se pela
síntese do entendimento como pertinente à unidade necessária da consciência própria, e isto
acontece por meio da categoria. (8)
Esta demonstra, pois, que a consciência empírica da diversidade dada em uma intuição
se acha sujeita a uma consciência pura “a priori”, do mesmo modo que uma intuição sensível
pura, que igualmente tem lugar “a priori”. Na proposição precedente se começou uma
dedução dos conceitos puros do entendimento; e como as categorias não se produzem senão
no entendimento, independentemente da sensibilidade, devo fazer abstração da maneira
segundo a qual se deu o diverso em uma intuição empírica, para considerar só a unidade que
o entendimento, por meio das categorias, põe na intuição.
Ulteriormente (§ 20) se demonstrará a ma neira segundo a qual se dá intuição empírica
na sensibilidade, posto que a unidade desta intuição é a que a categoria prescreve, segundo o
precedente § 20, para a diversidade de uma intuição dada em geral, e, portanto, o fim da
dedução não está completamente atingido até que o valor “a priori” destas categorias se
defina em relação com todos os objetos de nosso sentido. Mas há uma coisa de que não
poderia abstrair na demonstração precedente: é que os elementos diversos da intuição devem
ser dados anteriormente à síntese do entendimento e independentemente desta síntese,
embora o porquê fique aqui indeterminado.
Efetivamente, se em conseqüência supusesse em mim um entendimento que fosse ele
mesmo intuitivo (uma espécie de entendimento divino, que não se representaria por objetos
dados, mas em que a representação desse ou produzisse os próprios objetos), relativamente a
um conhecimento desse gênero, as categorias não teriam mais sentido. Elas não são mais do
que regras para um entendimento cujo poder consiste no pensamento, quer dizer no ato de
reduzir à unidade da apercepção a síntese da diversidade dada.
Não conhece, conseguintemente, nada por si mesmo este entendimento, somente
unindo e ordenando a matéria do conhecimento, a intuição que lhe deve ser dada pelo objeto.
Pretender demonstrar porque nosso entendimento não alcança a unidade da apercepção, senão
mediante as categorias, segundo seu número precis o, é tão difícil como explicar por que
temos estas funções do juízo e não outras, ou por que o espaço e o tempo são as únicas
formas de todas as nossas possíveis intuições.
22
A categoria não tem outro escopo que o conhecimento das coisas na sua aplicação aos
objetivos da experiência
Pensar e conhecer um objeto não é o mesmo. Ao conhecimento pertencem duas partes:
primeiramente, o conceito pelo qual em geral se pensa um objeto (a categoria); e, depois, a
intuição pela qual ele é dado; porque não pudesse dar-se ao conceito uma intuição
correspondente, o conceito seria um pensamento quanto à forma, mas sem objeto algum, e
nenhum conhecimento seria possível mediante ele, pois não teria nem haveria coisa alguma,
que eu saiba, a que pudesse aplicar-se meu pensamento.
23
É de suma importância a proposição precedente, porque determina os limites do uso
dos conceitos puros do entendimento em relação com os objetos, do mesmo modo que a
Estética transcendental determinou os limites do uso da forma pura de nossa intuição
sensível. O espaço e o tempo, como condições de possibilidade para que os objetos nos sejam
dados, só têm valor quando postos em rela ção com os objetos dos sentidos, é unicamente para
a experiência. Além desses limites não representam absolutamente nada; porque só estão nos
sentidos, e fora deles não têm realidade alguma.
Os conceitos puros do entendimento estão li vres desta limitação e se estendem aos
objetos da intuição em geral, seja ou não semelhante à nossa contanto que seja sensível e não
intelectual. Porém essa extensão dos conceitos além da nossa intuição sensível não nos serve
para nada. Em tal caso são conceitos vãos de objetos, ineficazes até para julgar se tais são
possíveis ou impossíveis. Limitam-se, pois, a ser simples formas do pensamento sem
realidade objetiva, embora não tenhamos intuição alguma a que possa aplicar-se a unidade
sintética da apercepção, que unicamente contém os conceitos, e que é desta maneira que eles
podem determinar um objeto. Nossa intuição sensível e empírica é pois só capaz de dar-lhes
um sentido e um valor.
Se, pois, se supõe como dado o objeto de uma intuição sensível, pode representar-se,
sem dúvida alguma, por todos os predicados que existem já na suposição de que não existe
nele nada daquilo que pertence à intuição sensível; por conseguinte, que não tem extensão o
que não está no espaço, que a duração do mesmo não tem tempo, que não há nele mudança
alguma (conseqüência das determinações no tempo) e assim sucessivamente. Mas não
constitui, propriamente, um conhecimento dizer o que não é a intuição de um objeto,
omitindo o que contém.
É que, neste caso, eu não me representei a possibilidade de um objeto para meu
conceito puro do entendimento, por não ter podido dar-lhe a intuição que lhe correspondia,
pois me limitei a dizer que a nossa não lhe convém. Mas o principal aqui é que as categorias
não possam aplicar-se a semelhantes coisas, quer dizer, ao conceito de substância, que só
existe como sujeito, nunca se concebe como simples predicado. A razão disso é óbvia, porque
ignoro se posso chamar uma coisa que corresponda a esta determinação de pensar, enquanto a
intuição empírica não me ofereça ocasião para sua aplicação. Ainda nos ocuparemos deste
assunto.
24
Aplicação das categorias aos objetos dos sentidos em geral
Os conceitos puros intelectuais se relacionam simplesmente mediante o entendimento
com os objetos da intuição em geral, sem distinguir se esta é nossa ou alheia, contanto que
seja sensível, e precisamente por isso são simples formas do pensamento, mediante as quais
não conhecemos ainda nenhum outro objeto determinado. A síntese ou ligação da diversidade
nestes conceitos se rela ciona unicamente com a unidade da apercepção e é, deste modo, o
princípio da possibilidade do conhecimento “a priori”, enquanto ele repousa sobre o
entendimento, e, por conseguinte, não é somente transcendental mas também puramente
intelectual.
Mas como há em nós “a priori” uma certa forma da intuição sensível que assenta sobre
a receptividade de nossa capacidade representativa (da sensibilidade), o entendimento pode
então, como uma espontaneidade, determinar o sentido interno, de acordo com a unidade
sintética da apercepção pela diversidade das representações dadas, e conceber “a priori” a
unidade sintética da apercepção do que há de diverso na intuição sensível, como condição à
qual necessariamente devem sujeitar-se todos os objetos de nossa (huma na) intuição.
Deste modo, pois, as categorias, como simples formas do pensamento, recebem uma
realidade objetiva, quer dizer, uma aplicação aos objetos que nos podem ser dadas na
intuição, mas só como fenômenos; porque unicamente com relação a eles, podemos ter
intuição “a priori”.
Esta síntese da diversidade da intuição sensível que é possível e necessária “a priori”,
pode chamar-se figurada (“synthesis speciosa”), para distingui-la daquela outra que se
conceberia pela relação da diversidade de uma intuição em geral com as simples categorias e
que se denomina síntese intelectual (“synthesis intellectualis”); ambas são transcendentais
porque procedem “a priori” e fundam a possibilidade de outros conhecimentos “a priori”.
Entretanto, quando a síntese figurada se refere unicamente à unidade sintética primitiva
da apercepção, quer dizer, a esta unidade transcendental que se concebe nas categorias, deve
chamar-se, para sua distinção da síntese puramente intelectual, síntese transcendental da
imaginação. A imaginação é a faculdade de representar na intuição um objeto embora não
esteja presente. Mas como toda intuição nossa é sensível, a imaginação pertence à
sensibilidade em virtude desta condição subjetiva que só lhe permite dar a um conceito do
entendimento uma intuição correspondente. Porém enquanto a sua síntese é uma função da
espontaneidade, a qual é determinante e não somente, como os sentidos, determinável, e que,
por conseguinte, ela pode determinar “a priori” a forma do sentido conforme a unidade da
apercepção, a imaginação é sob esse titulo um poder de determinar “a priori” a sensibilidade;
e a síntese a que ela submete as suas intuições, de acordo com as categorias, é a síntese
transcendental da imaginação.
É esta síntese um efeito do entendimento sobre a sensibilidade e a primeira aplicação
do mesmo (aplicação que é a um tempo o princípio de todas as outras) a objetos de uma
intuição possível para nos.
Como síntese figurada, ela se distingue da sín tese intelectual, que é operada só pelo
entendimento, sem o concurso da imaginação. Dou à imaginação, enquanto ela é espontânea,
o nome da imaginação produtora, cuja síntese é submetida simplesmente a leis empíricas,
quer dizer, às leis da associação, e que, por conseguinte, não concorre em nada para a
explicação da possibilidade do conhecimento “a priori”. Por tal razão não pertence à Filosofia
transcendental, mas à Psicologia.
Este é o lugar de explicar o paradoxo que toda gente deve ter notado na exposição da
forma do sentido interno.(9)
Este paradoxo consiste em dizer que o sentido interno não nos apresenta, à nossa
consciência, não como somos em nós mesmos, mas como nos aparecemos, porque nos
percebemos conforme temos sido interiormente afetados, o que parece ser contraditório,
porque devíamos considerar-nos como passivos para nós mesmos. Daí o fato de, nos sistemas
de Psicologia, identificar-se o sentido interno e a faculdade da apercepção (que distinguimos
cuidadosamente).
O que determina o sentido interno é o entendimento e sua faculdade originária de
enlaçar os elementos diversos da intuição, quer dizer, de compô-los sob uma apercepção
(como o lugar mesmo no qual assenta a sua possibilidade). Mas, como o entendimento
humano é uma faculdade de intuição (a sensibilidade não poderia, não obstante, apropriar-se
dela para reunir a diversidade da sua própria intuição), sua síntese, considerada em si mesma,
é só a unidade do ato do qual tem consciência como tal, até sem o auxílio da sensibilidade,
mas pelo qual pode determinar interiormente a sensibilidade em relação à diversidade que
possa oferecer-lhe na forma de sua intuição.
Exerce, pois, o entendimento no sujeito passivo (ao qual é uma faculdade) sob o nome
de síntese transcendental da imaginação, um ato em virtude do qual dizemos que o sentido
interno foi afetado. São tão diferentes a apercepção e a sua unidade sintética com o sentido
interior, que a primeira como fonte de todo enlace se refere, sob o nome de categorias, à
diversidade das intuições em geral, antes que a toda intuição sensível dos objetos; enquanto
que, pelo contrário, os sentidos internos só contêm a simples forma da intuição e não têm
ligação alguma da diversidade que há nela e que, por conseguinte, não contém nenhuma
intuição determinada.
Esta só é possível mediante a consciência da determinação deste sentido pelo ato
transcendental da imaginação (a influência sintética do entendimento sobre o sentido interno)
que chamei síntese figurada. Isto é o que sempre observamos em nós mesmos. Não podemos
conceber uma linha sem traçá-la no pensamento, nenhum círculo sem descrevê-lo, nem
representar-nos as três dimensões do espaço sem tirar de um ponto três linhas perpendiculares
entre si.
Tampouco poderíamos representar-nos o tempo sem tirar uma linha reta (que deve ser a
representação exterior figurada do tempo) e atender o ato da síntese do diverso pelo qual
determinamos sucessivamente ao sentido interno e mediante esta a sucessão desta
determinação que nele tem lugar.
O que produz desde logo o conceito de sucessão é o movimento como ato do sujeito
(não como determinação de um objeto) e, por conseguinte, a síntese da diversidade no
espaço, quando fazemos abstração deste para não atender senão ao ato pelo qual
determinamos ao sentido interno segundo sua forma.
Não encontra, pois, o entendimento, seme lhante ligação do diverso no sentido interno,
senão que ao ser afetado por este o produz. De que ma neira o eu penso pode distinguir-se do
eu que se percebe (podendo ainda representar-me intuições de outra espécie, ao menos como
possíveis) sem deixar de ser com este um só e mesmo sujeito? Como posso dizer que eu,
como inteligência e sujeito pensante, me conheço enquanto objeto pensado, oferecendo-me à
intuição como os demais fenômenos, quer dizer, não tal como sou ante o entendimento, mas
tal como me apareço?
Tal questão oferece a mesma dificuldade que a de averiguar como posso eu ser para
mim mesmo um objeto e também um objeto de intuição e de percepções internas. É fácil
provar que isto deve ser realmente assim, se se reconhece que o espaço é uma forma pura dos
fenômenos dos sentidos externos, e que o tempo, que não é um objeto da intuição externa, só
é representável sob a forma de uma linha que traçamos, sem cujo esquema não podemos
conhecer a unidade de sua medida. De igual modo temos que tomar sempre para a
determinação de um período ou para a de todas as percepções internas o que nos oferecem de
mutável as coisas exteriores; por conseguinte, as determinações do sentido interno devem
ordenar-se precisamente enquanto fenômenos no tempo, da mesma maneira que ordenamos
no espaço as determinações dos sentidos externos.
Se se reconhece, pois, que estes últimos não dão conhecimento de objetos só enquanto
somos afetados exteriormente, é preciso também admitir com respeito ao sentido interno que
só nos percebemos interiormente mediante esse sentido, conforme formos afetados por nós
outros mesmos, quer dizer, que pelo que concerne à intuição interna, não conhecemos nosso
próprio sujeito mais do que como fenômeno, não como coisa em si.(10)
* * *
25
Ao contrário, tenho consciência de mim mesmo na síntese transcendental da
diversidade das representações em geral, por conseqüência da unidade sintética primitiva da
percepção, não como me apareço, nem tampouco como sou em mim mesmo, mas só tenho
consciência do que eu sou. Esta representação é um pensamento, não uma intuição. Mas
como para o conhecimento de nós mesmos se exige, além do ato de pensar que compõe a
diversidade de toda intuição possível na unidade da apercepção, uma espécie determinada de
intuição que dá esta diversidade, minha própria existência não é em verdade um fenômeno
(muito menos ainda uma simples aparência).
Pois bem: a determinação de minha existência (11) só pode ter lugar segundo a forma
do sentido interior, e segundo a maneira particular em que o diverso que eu enlaço está dado
na intuição interna e, por conseguinte, não me conheço como sou, mas simplesmente como
ante mim apareço.
26
Dedução transcendental do uso experimental geralmente possível dos conceitos puros
do entendimento
Na dedução metafísica temos provado a origem das categorias “a priori” em geral, por
sua perfeita conformidade com as funções lógicas gerais do pensar; na dedução
transcendental, fizemos ver a possibilidade dessas categorias como conhecimentos “a priori”
de objetos de uma intuição em geral (§§ 20 e 21). Devemos agora explicar a possibilidade de
conhecer “a priori”, mediante essas categorias, objetos que não podem oferecer-se mais que a
nossos sentidos e conhecê-los, não em verdade na forma de sua intuição, mas nas leis de sua
ligação, e como por conseqüência se podem prescrever leis à natureza e em certo modo tornálas possíveis, porque sem esta explicação não se compreende como o que pode oferecer-nos a
nossos sentidos, deve submeter-se a leis que brotam “a priori” só do entendimento. Notarei
em primeiro lugar que entendo por síntese da apreensão a composição da diversidade em uma
intuição empírica, pela qual a percepção, quer dizer, a consciência empírica desta intuição
(como fenômeno) é possível.
Temos nas representações de espaço e tempo formas “a priori” da intuição externa e
interna. Com elas deve sempre concordar a síntese da apreensão da diversidade do fenômeno,
porque só pode efetuar-se de acordo com estas formas. Mas o espaço e o tempo não
representados simplesmente como formas da intuição sensível, mas como in tuições (que
contêm uma diversidade); por conseguinte, com a determinação da unidade desta diversidade
neles “a priori” (V. neste livro Estêtica Transcendental).(12)
Com (não em) essas intuições estão já dadas “a priori” como condição da síntese de
toda apre ensão, a unidade mesma da síntese da diversidade que se encontra em nós outros ou
fora de nós, e por conseguinte também uma união (Veirbindung), com a qual deve conformar
tudo o que há de ser representado determinadamente no espaço e no tempo. Esta unidade
sintética não pode ser outra que a da união em uma consciência primitiva da diversidade de
uma intuição dada em ge ral; mas aplicada, segundo as categorias, só à nossa intuição
sensível. Por conseqüência, toda síntese, pela qual a percepção mesma é possível, está sujeita
às categorias, e como a experiência é um conhecimento por percepções entrelaçadas, as
categorias são as condições da possibilidade da experiência, e valem por conseguinte “a
priori” para todos os objetos empíricos. Quando faço, pois, por exemplo, a intuiç ão empírica
de uma casa, uma percepção da apercepção das diversas partes da mesma, a unidade
necessária do espaço e da intuição sensível exterior em geral me serve de fundamento, e
desenho, por assim dizer, a forma dessa casa de acordo com a unidade sintética das diversas
partes do espaço. Mas esta mesma unidade sintética, se faço abstração da forma do espaço,
tem seu lugar no entendimento e é a categoria da síntese do homogêneo de quantidade, com a
qual deve, por conseguinte, conformar a síntese da apreensão, isto é, a percepção.(13)
Quando (formulando outro exemplo) observo a congelação da água, conheço dois
estados (liquido e sólido) que estão como tais, respectivamente, em uma relação temporal.
Mas no tempo que eu, como intuição interna, coloco por fundamento ao fenômeno, me
represento necessariamente a unidade sintética da diversidade, e sem a qual esta relação não
poderá ser dada determinadamente em uma intuição (com respeito à sucessão).
Esta unidade sintética (como condição “a priori” sob a qual reúno o diverso de uma
intuição em geral, e faço abstração da forma constante de minha intuição interna, do tempo) é
a categoria de causa mediante a qual determino, aplicando-a à sensibilidade, tudo o que
sucede conforme sua re lação em geral como o tempo.
Portanto, a apreensão em tal acontecimento, por conseguinte, o acontecimento mesmo,
acham-se relativamente à possível percepção, sujeitos ao conceito da relação de causa e
efeito. É o mesmo nos outros casos. As categorias são conceitos que prescrevem “a priori”
leis aos fenômenos, por conseguinte à natureza, considerada como conjunto de todos os
fenômenos (“natura materialiter specta ta”). Agora se trata de saber como não sendo essas
categorias derivadas da natureza e não se regulando como se fossem seu modelo (porque de
outro modo seriam simplesmente empíricas), pode compreender-se que a natureza seja quem
rege por elas, quer dizer: como podem determinar “a priori” a união da diversidade da
natureza sem tomá-la da própria natureza?
Eis aqui a solução de ste enigma.
Existe semelhança entre a conformidade das leis dos fenômenos na natureza com o
entendimento e com sua forma “a priori” (quer dizer, com sua faculdade de unir a diversidade
em geral) e a que os fenômenos mesmos têm com a forma “a priori” da in tuição sensível.
Assim como as leis existem relativamente no individuo (de quem de pendem os fenômenos),
enquanto têm entendimento, os fenômenos não são coisas em si, existem só no mesmo
sujeito, enquanto possui sentidos.
As coisas em si estariam também necessaria mente sujeitas às leis ainda que não
houvesse um entendimento que as conhecera. Mas os fenôme nos são unicamente
representações de coisas que são desconhecidas no que em si podem ser. Como simples
representações, não estão sujeitas a ne nhuma outra lei de união que a prescrita pela faculdade
de unir.
A imaginação é a faculdade que enlaça os elementos diversos da intuição sensível, que
depende do entendimento pela unidade de sua sín tese intelectual, e da sensibilidade pela
diversidade da apre ensão. Mas como toda percepção possível depende da síntese da
apreensão, e esta sín tese empírica da síntese transcendental, e por conseguinte, das categorias,
todas as percepçôes são possíveis. E também tudo o que pode chegar à consciência empírica,
quer dizer, todos os fenômenos da natureza se acham, quanto a sua união, sujeitos às
categorias das quais depende a natureza (simplesmente considerada como natureza em geral)
como da razão primitiva de sua legitimidade necessária (como “natura formaliter specta ta”).
Mas a faculdade do entendimento puro não pode prescrever “a priori” outras leis aos
fenômenos por simples categorias que servem de fundamento a uma natureza em geral, como
legitimidade dos fenômenos em tempo e espaço. Referindo-se empiricamente a fenômenos
determinados, não podem as leis particulares proceder somente das categorias do
entendimento, não obstante todas se acharem submetidas a estas.
É, pois, necessário que a experiência interve nha para conhecer estas últimas leis; mas
só as primeiras nos dão “a priori” ensinamentos da experiência em geral e do que pode ser
conhecido como objeto da mesma.
27
Resultado desta dedução dos conceitos do entendimento
Não podemos pensar um objeto sem as cate gorias, não podemos conhecer um objeto
pensado sem as intuições correspondentes a esses conceitos. Mas todas as nossas intuições
são sensíveis, e o conhecimento, enquanto o objeto está dado, é empírico.
Mas o conhecimento empírico é experiência. Por conseguinte, não é possível nenhum
conhecimento “a priori” a não ser o de um objeto de uma experiência possível.(14)
Limitado simplesmente aos objetos empíricos, este conhecimento não procede todo ele
da experiência, pois tanto as intuições puras como os conceitos puros do entendimento são
elementos do conhecimento que se encontram em nós outros “a priori”. Para conceber a
conformidade necessária da experiência com os conceitos de seus objetos: ou é a experiência
que possibilita os conceitos, ou são os conceitos que possibilitam a experiência
A primeira explicação não pode convir às categorias (nem mesmo à intuição sensível
pura), porque as categorias são conceitos “a priori”, e que por conseguinte elas são
independentes da experiência (atribuir-lhes uma origem empírica seria admitir uma espécie
de “generatio aequivoca”).
Resta pois a segunda explicação (que é como sistema da epigênese da razão pura), a
saber que as categorias contêm do lado do entendimento, os princípios da possibilidade de
toda experiência em geral. Elas, porém, tornam possível a experiência. E quais princípios da
possibilidade da experiência fornecem elas em sua aplicação aos fenômenos?
É o que mostrará o capítulo seguinte, sobre o uso transcendental do julgamento.
Uma hipótese fácil de refutar é a que se forma aceitando uma via intermediária entre as
duas que assinalamos, e dizendo que as categorias não são nem primeiros princípios “a
priori” de nosso conhecimento, espontaneamente concebidos, nem tampouco produzidas pela
experiência a que e que o autor de nosso ser regulou de tal sorte, que seu uso concorda
exatamente com as leis da Natureza, segundo as quais se forma a experiência (que seria como
uma espécie de sistema de pré-formação da razão pura).
Além de, em tal hipótese, não se ver termo à suposição de disposições predeterminadas
para os juízos ulteriores, existe contra esse novo meio imaginado um argumento decisivo, e é
que em semelhante caso as categorias careceriam da ne cessidade, que é essencialmente
inerente aos seus conceitos.
Porque o conceito de causa, por exemplo, que manifesta a necessidade de
consequência, sob uma condição suposta, seria falso, se somente se fundasse em uma
necessidade subjetiva, arbitrária, inata em nós outros, de unir certas representações empíricas
segundo uma regra de relação.
Eu não poderia dizer: o efeito está unido com a causa no objeto (quer dizer,
necessariamente) mas: eu sou de tal natureza que não posso conceber esta representação mais
do que ligada com outra; isto precisamente é o que quer o cético, porque então todo nosso
saber pelo pretendido valor objetivo de nossos juízos não seria mais do que pura experiência
e não faltaria tampouco quem negasse esta necessidade subjetiva (que deve ser sentida).
Pelo menos não se poderia discutir com ninguém uma coisa que dependia unicamente
da organização de seu sujeito.
Resumo Desta Dedução
 É a exposição dos conceitos puros do entendimento (e com eles de todo conhecimento
teórico “a priori”) como princípios da possibilidade da expe riência; mas tendo a esta como a
determinação dos fenômenos em tempo e espaço em geral e tirando-a enfim do princípio da
unidade sintética primitiva da apercepção, como da forma do entendimento em relação com o
espaço e tempo, como formas primitivas da sensibilidade. (15)
LIVRO SEGUNDO
ANALÍTICA DOS PRINCÍPIOS
O plano pelo qual está construída a Lógica geral corresponde, exatamente, à divisão das
faculdades superiores do conhecimento, a saber: entendimento, juízo e razão. Trata, pois, essa
ciência, em sua analítica, de conceitos, juízos e raciocínios, segundo as funções e ordem
dessas faculda des do espírito, que se compreende em geral sob a ampla denominação de
Entendimento.
Como a Lógica puramente formal de que fa lamos aqui faz abstração de todo conteúdo
do conhecimento (da questão de saber se ele é puro ou empírico), e não se ocupa senão da
forma do pensamento em geral (do conhecimento discursivo), ela pode encerrar, também, em
sua parte analítica um cânon para a Razão, pois se pode aperceber “a priori”, decompondo os
atos da Razão em seus momentos, sem que haja necessidade de fixar-se na natureza especial
do conhecimento que aí é empregado.
Já a Lógica transcendental sendo restringida a um conteúdo determinado, quer dizer,
unicamente ao conhecimento puro “a priori”, não poderia acompanhar a primeira em sua
divisão. Vê-se, efetivamente, que o uso transcendental da razão não tem valor objetivo, e, por
conseguinte, não pertence à Lógica da verdade, quer dizer à analítica, mas que, como Lógica
da aparência, exige, sob o nome de Dialética transcendental, um lugar especial no edifício
escolástico.
O entendimento e o juízo acham na lógica transcendental o cânon de seu emprego
objetivamente válido, isto é, de seu uso verdadeiro, sendo por isso que pertencem à parte
analítica desta ciência.
Quando a razão, porém, intenta decidir “a priori” algo referente a certos objetos, e
estender o conhecimento além dos limites da experiência possível, ela então é dialética, e
suas asserções ilusórias não concordam com um cânon como o que deve conter a analítica.
A analítica dos princípios será, pois, um cânon para o julgamento; ela lhe ensina a
aplicar aos fenômenos, aos conceitos do entendimento, que contêm a condição das regras “a
priori” do entendimento; eu me servirei da doutrina do julgamento, que designa mais
exatamente este trabalho.
Introdução
Do juízo transcendental em geral
Definindo-se o entendimento em geral como a faculdade das regras, o juízo será a
faculdade de subsumar sob regras, quer dizer, de determinar se uma coisa entra ou não sob
uma regra dada (“casus datae legis”). A Lógica geral não contém preceitos para o juízo nem
pode contê -los, porque, como faz abstração de todo conteúdo do conhecimento, só lhe
incumbe expor separadamente e por via de análise simples forma do conhecimento em
conceitos, juízos e raciocínios, com o que estabe lece as regras formais de todo uso do
entendimento.
E se quisesse mostrar, de um modo geral, como se subsumam estas regras, quer dizer,
decidir se algo entra ou não, achar-se-ia que ela, por seu turno, só poderia atingi-la por meio
de uma regra. Mas como esta regra, na qualidade de regra, exigiria uma nova instrução por
parte do juízo, adverte -se que o entendimento pode instruir-se e formar-se por regras,
enquanto que o juízo é um dom particular que se exerce mas que não pode apreender-se.
Desse modo o julgamento é o caráter distintivo daquilo que se denomina bom senso,
cuja falta nenhuma escola pode suprir. A um entendimento limitado pode-se procurar um
número de regras e inculcar-lhe certos conhecimentos, mas é miste r que o individuo por si
mesmo tenha a faculdade de servir-se exatamente; e na ausência desse dom da natureza, não
há regra que seja capaz de premuni-lo contra o abuso que faça.(16)
Um médico, um juiz, ou um publicista podem ter em sua mente magníficas regras
patológicas, jurídicas ou políticas, ao ponto de parecerem ter uma ciência profunda, e, no
entretanto, falharem com a maior facilidade na aplicação dessas regras; ou porque lhes falte o
julgamento natural, sem faltar-lhes por isso o entendimento, e que, se eles vêem bem o geral
“in-abstracto”, são incapazes de decidir se um caso está aí contido “in concreto”, seja porque
não estão exercitados nesta espécie de julgamentos por exemplos e negócios reais.
A grande utilidade dos exemplos, a única que se quer, é exercer o juízo, porque no
tocante a exatidão e à precisão dos conhecimentos do entendimento eles são, sobretudo,
funestos; é raro, com efeito, que preencham de um modo adequado a condição da regra
(como “casus in terminis”); além disso, debilitam geralmente essa tensão necessária ao
entendimento para aperceber as regras em toda a sua generalidade e independentemente das
circunstâncias particulares da experiência, até o ponto que se acaba por tomar o costume de
empregá-los antes como fórmulas do que como princípios.
Vêm a ser os exemplos para o juízo como a muleta para o inválido, de que não pode
prescindir aquele que não tenha essa faculdade natural. Mas com a Lógica transcendental não
sucede que não possa dar preceitos ao juízo como a Lógica geral; pelo contrário, parece que
sua própria função é corrigir e assegurar o juízo mediante regras determinadas no uso do
entendimento puro. E, realmente, se for dar extensão ao entendimento no campo do
conhecimento puro “a priori” parece que não só é inútil volver à Filosofia, mas perigoso,
porque apesar de tantas tentativas feitas se avançou pouquíssimo no terreno ou quase nada; já
a Filosofia terá o seu valor quando a tomamos, não como doutrina, mas como crítica, que
sirva para prevenir os passos falsos do juízo (“Lapsus judicil”), no uso do pouco número de
conceitos puros intelectuais que possuímos.
Neste caso, ainda que sua utilidade seja nega tiva, a Filosofia se apresenta com toda sua
penetração e habilidade de exame. A Filosofia transcendental tem a particularidade de, ao
mesmo tempo que a regra (ou melhor dito, a condição ge ral das regras) que está dada no
conceito puro do entendimento, poder também indicar “a priori” o caso em que a regra deve
aplicar-se.
A superioridade que tem por isto sobre todas as demais ciências instrutivas (exceto as
matemáticas) estriba em tratar de conceitos que devem referir-se “a priori” aos seus objetos, e
cujo valor objetivo, conseguintemente, não pode demonstrar-se “a posteriori”. Mas ao mesmo
tempo necessita ela expor por meio de signos gerais e suficientes as condições sob as quais
possam dar-se objetos em harmonia com esses conceitos; os quais, de outro modo, não teriam
conteúdo algum, e seriam, por conseguinte, puras formas lógicas e não conceitos puros do
entendimento.
Esta doutrina transcendental do juízo conte rá, pois, dois capítulos: o primeiro tratará da
condição sensível com a qual é unicamente possível empregar os conceitos puros do
entendimento, quer dizer, do esquematismo do entendimento puro; e o segundo, dos juízos
sintéticos que saem “a priori” sob estas condições dos conceitos puros do entendimento e
servem de fundamento a todos os demais conhecimentos “a priori”, quer dizer, de princípios
do entendimento puro.
CAPÍTULO 1
Do esquematismo dos conceitos puros do entendimento
Em toda subsunção de um objeto só num conceito, a representação do primeiro deve ser
homogênea àquela do segundo, quer dizer, que o conceito deve encerrar aquilo que é contido
no objeto que motivou a subsunção. Em verdade é isso o que se entende quando se diz que
um objeto está contido em um conceito.
Assim, por exemplo, o conceito empírico de um prato tem qualquer coisa semelhante
com o conceito puramente geométrico de um círculo, posto que a forma redonda que no
primeiro se pensa, se concebe no segundo. Mas os conceitos puros do entendimento
comparados com as intuições empíricas (ou sensíveis em geral) são por completo
heterogêneas, dessemelhantes, e não se encontram jamais em intuição alguma.
Como, pois, é possível a subsumação dessas intuições sob esses conceitos, e, por
conseguinte, a aplicação das categorias aos fenômenos, posto que ninguém pode dizer de tal
categoria, por exemplo:~a causalidade se percebe pelos sentidos e que está contida no
fenômeno?
E esta pergunta, é tão natural e tão importante, que faz com que uma doutrina
transcendental do julgamento seja necessária para explicar como os conceitos puros do
entendimento podem aplicar-se aos fenômenos em geral. Em todas as outras ciências, onde os
conceitos pelos quais o objeto é pensado de um modo geral não são essencialmente distintos
dos que representam este objeto “in concreto”, tal como é dado, não é necessário dar qualquer
explicação para a aplicação do conceito ao objeto.
É, pois, evidente que deve existir um terceiro termo que seja semelhante por uma parte
à cate goria e por outra ao fenômeno, e que torne possível a aplicação da categoria ao
fenômeno. Esta representação intermediária deve ser pura (sem nenhum elemento empírico)
e, portanto, é precis o que ela seja de um lado intelectual, e do outro, sensível.
Tal é o esquema transcendental.
O conceito do entendimento contém a unidade sintética pura da diversidade em geral. O
tempo, como condição formal das representações diversas dos sentidos internos, e, por
conseguinte, de sua ligação, contém uma diversidade “a priori” na intuição pura. Ora, uma
determinação transcendental do tempo é homogênea, semelhante à categoria (que faz a
unidade) enquanto é universal e assenta sobre uma regra “a priori”.
Mas, por outro lado, é homogênea ao fenômeno enquanto também o tempo está contido
em todas as representações empíricas da diversidade. Será, pois, possível a aplicação da
categoria aos fenômenos mediante a determinação transcendental do tempo; e esta
determinação, por seu turno, torna possível a subsumação dos fenômenos à categoria como
esquema dos conceitos do entendimento.
Espero que ninguém duvidará já, depois do que ficou estabelecido na dedução das
categorias, sobre a questão de saber se o uso destes conceitos puros do entendimento é
simplesmente empírico ou se ele é transcendental, quer dizer, se eles não se relacionam “a
priori” senão como fenômenos, como condição de uma experiência possível, ou se eles
podem estender-se, como condição da possibilidade das coisas em geral, aos objetos em si
(em ser restritos à nossa sensibilidade).
Temos visto, com efeito, que os conceitos são impossíveis ou que carecem de sentido
se um objeto não é dado, seja a esses conceitos mesmos, seja pelo menos aos elementos de
que eles se compõem, e que, por conseguinte, eles não podem aplicar-se a coisas em si (sem
considerar-se como elas podem nos ser dadas). Vimos que o único modo que existe para que
os objetos nos sejam dados é por uma modificação de nossa sensibilidade. E, por último,
temos visto também que os conceitos puros “a priori” devem conter “a priori”, além da
função do entendimento na categoria, certas condições formais da sensibilidade (em especial
do sentido interno), condições estas as únicas que permitem a aplicação das categorias a um
objeto qualquer.
Chamaremos a esta condição formal e pura da sensibilidade, que limita em seu uso ao
conceito do entendimento, o esquema desse conceito, e esquemas, o esquematismo do
entendimento puro.
Por si mesmo, o esquema não é sempre mais do que um produto da imaginação; mas
como a síntese desta não tem por fim nenhuma intuição particular, senão, unicamente, a
unidade na determinação da sensibilidade, é preciso não confundir o esquema com a imagem.
Quando eu coloco cinco pontos seguidos, faço uma imagem do número cinco. Pelo contrário,
quando penso um número em geral, seja cinco ou cem, este pensamento é antes a
representação de um método que serve para representar em uma imagem uma quantidade (p.
ex.: mil), de acordo com certo conceito que não é esta mesma imagem, o que, aliás, não seria
muito difícil de fazer se quiserem percorrê-las com os olhos e compará-las com meu
conceito.
Pois bem, o que eu denomino esquema de um conceito é a representação de um
processo ge ral da imaginação que serve para dar sua imagem a esse conceito.
E, com efeito, nossos conceitos sensíveis puros não têm por fundamento imagens de
objetos, mas esquemas. Não há imagem alguma de um triângulo que possa ser jamais
adequada ao conceito de um triângulo em geral. Com efeito, nenhuma poderia atingir a
generalidade do conceito, fazer com que aquele se aplique igualmente a todos os triângulos,
retângulos, ângulos e poligonos etc., mas ela é sempre restrita a uma parte desta esfera. O
esquema do triângulo não pode existir mais do que no pensamento, e significa uma regra da
síntese da imaginação relativamente a certas figuras puras (concebidas pelo pensamento
puro) no espaço.
Um objeto da experiência ou uma imagem deste objeto atinge bem menos ainda o
conceito empírico, mas aquele se relaciona sempre imedia tamente ao esquema da imaginação
como a uma regra que serve para determinar nossa intuição de acordo com um conceito geral.
O conceito de cor, p. ex., designa uma regra segundo a qual minha imaginação pode
representar-se de um modo geral a figura de um quadrúpede, sem limitar-se a uma figura
particular da experiência, nem a qualquer imagem possível que “in concreto” possa
representar-me.
Este esquematismo do entendimento, relativo aos fenômenos e à sua simples forma, é
uma arte oculta nas profundidades da alma humana, bem difícil de conhecer em sua natureza
e em seu segredo. Não podemos dizer mais que a imagem é um produto da faculdade
empírica da imaginação criadora, e que o esquema dos conceitos sensíveis (como de figuras
no espaço) é um produto e de certo modo um monograma da imaginação pura “a priori”,
mediante o que e pela qual são só possíveis as imagens, e que essas imagens não se podem
enlaçar ao conceito senão por meio do esquema que designam, se não estão nelas mesmas
perfeitamente adequadas.
O esquema de um conceito puro do entendimento é, pelo contrário, algo que não pode
reduzir-se a nenhuma imagem; não há mais do que a síntese pura operada conforme uma
regra de unidade, de acordo com os conceitos em geral e expressa pela categoria. É um
produto transcendental na imaginação, que consiste em determinar o sentido interno em geral,
segundo as condições de sua forma (do tempo), em relação a todas as representações,
enquanto devem unir-se “a priori” em um conceito de acordo com a unidade da percepção.
Sem nos determos em uma seca e fastidiosa análise, daquelas que exigem em geral os
esquemas transcendentais dos conceitos puros do entendimento, nós os exporemos muito
melhor segundo a ordem das categorias e em relação com elas.
A imagem pura de todas as quantidades (“quantorum”) para o sentido externo é o
espaço, e a todos os objetos dos sentidos em geral, o tempo. Mas o esquema puro da
quantidade (“quantitatis”) como conceito do entendimento, é o número, que é uma
representação que compreende a adição sucessiva de um a um (homogêneos em si). O
número não é, pois, mais do que a unidade de síntese do diverso de uma intuição homogênea
em geral, ao introduzir eu o tempo mesmo na apreensão da intuição.
No conceito puro do entendimento, uma realidade é o que corresponde a uma sensação
em ge ral; por conseguinte, os objetos como fenômenos, o que neles corresponde à sensação é
a matéria transcendental de todos os objetos como coisas em si (a realidade). Mas toda
sensação tem um grau ou uma quantidade com que pode encher mais ou menos o tempo, quer
dizer, o sentido interno, com a mesma representação de um objeto até que se reduz a zero (=
“o negatio”).
Existe, pois, uma relação e um encadeamento, ou melhor, uma ponte da realidade à
negação, o que torna representável esta realidade como quantidade. E o esquema desta
realidade, como quantidade de algo que enche o tempo, é precisamente esta contínua e
uniforme produção da realidade no tempo, quando se desce cronologicamente da sensação,
que tem um certo grau, até sua inteira desaparição, ou quando se sobe sucessivamente da
negação da sensação até sua quantidade.
O esquema da substância é a permanência do real no tempo; quer dizer, que se
representa o real como um substrato da determinação empírica do tempo, em geral; substrato
que permanece, enquanto que tudo o mais varia. Nele não escoa o tempo, mas a existência do
mutável. Ao tempo, pois, que em si fixo e imutável, corresponde no fenômeno o imutável na
existência; quer dizer, a substância. Somente nesta podem determinar-se a sucessão e a
simultaneidade dos fenômenos em relação ao tempo.
O esquema da causa e da causalidade de uma coisa em geral é o real; que, uma vez
posto, ne cessariamente está sempre seguido de alguma outra coisa. Consiste, pois, na
sucessão da diversidade enquanto sujeito a uma regra.
O esquema da reciprocidade, ou da mútua causalidade de substância em relação com
seus acidentes, é a simultaneidade das determinações de uma com as de outras, conforme
uma regra geral. O esquema da possibilidade é a conformidade da síntese de diferentes
representaçôes com as condições do tempo em geral; por exemplo: o contrário não pode
existir ao mesmo tempo em uma coisa, mas sim sucessivamente . Por conseguinte, a
determinação da representação de uma coisa em um tempo dado.
O esquema da realidade é a existência em um tempo determinado.
O esquema da necessidade é a existência de um objeto em todo tempo.
Em tudo isto se vê, pois, o que contém e representa o esquema de cada categoria: o da
quantidade, a produção (a síntese) do tempo mesmo na apreensão sucessiva de um objeto; o
da qualidade, a síntese da sensação (da percepção com a repre sentação do tempo ou
ocupação do tempo); o de relação, o enlace que une as percepçôes em todo tempo (quer
dizer, conforme, uma regra de determinação do tempo); por último, o esquema da
modalidade e de sua categoria, o tempo mesmo, para ver como e se este objeto pertence ao
tempo.
Os esquemas não são, pois, mais do que determinações “a priori” do tempo feitas
regras, e que, segundo a ordem das categorias, têm por objeto a série do tempo, o intervalo do
tempo, e, por fim, o conjunto do tempo em relação a todas as coisas possíveis.
De tudo isto resulta que o esquema tismo do entendimento, pela síntese transcendental
da imaginação, tende unicamente à unidade dos ele mentos diversos da intuição no sentido
interno, e assim mesmo, ainda que indiretamente, à unidade da percepção, por ser função que
corresponde ao sentido interno (a sua receptividade). Os esquemas dos conceitos puros do
entendimento são, pois, as únicas e verdadeiras condições pelas quais podem estes conceitos
pôr-se em relação com obje tos e dar-lhes, por conseguinte, uma significação.
De sorte que se vê que, em definitivo, as cate gorias só têm possível um uso empírico,
porque unicamente servem para submeter os fenômenos às regras gerais da síntese por meio
de princípios de uma unidade necessária “a priori” (por causa da união necessária de toda
consciência em uma só apercepção primitiva), e tomar desse modo os fenômenos suscetíveis
de uma ligação universal em uma experiência. Mas todos os nossos conhecimentos radicam
neste conjunto de toda expe riência possível e a verdade transcendental que precede à
empírica, e a possibilita na relação geral do espírito com essa experiência.
Ao mesmo tempo é evidente que, se os esquemas da sensibilidade realizam em
primeiro lugar as categorias, também as limitam, isto é, reduzem-nas em estado tal que ficam
fora do Entendimento (quer dizer, da sensibilidade). Assim, o esquema é apenas o fenômeno
no conceito sensível de um objeto de conformidade com a sua cate goria.
NUMERUS est quantitas phoenomenon, SENSATIO, realitas phoenomenon,
CONSTANS et perdurabile rerum substantia phoenomenon, AETERNITAS, NECESSITAS,
phoenomena etc., etc. Se tirarmos uma condição restritiva, estendemos, segundo parece, o
conceito anteriormente limitado.
Consideradas as categorias em seu sentido puro e independente das condições da
sensibilidade, valerão, neste caso, para os objetos em geral tal como eles são, enquanto que os
seus esquemas somente os representam como eles nos aparecem, tendo, assim, as categorias
um valor independente de todo esquema e de grande extensão.
É verdade, entretanto, que os conceitos puros do Entendimento conservam sempre um
certo sentido, mesmo depois de ter sido feita a extração de toda condição sensível, porém é
um sentido me ramente lógico; quer dizer, o da simples unidade das representações, embora
estas sem um fim determinado, razão pela qual esses conceitos carecem de significação,
posto que não têm um obje tivo a que referir.
A substância, p. ex., separada da determina ção sensível da permanência, significa
apenas que uma coisa pode conceber-se como sendo sujeito (embora não seja o predicado de
outra coisa). Mas nada podemos fazer com essa representação, uma vez que não conhecemos
as determinações que deve possuir a coisa para atingir o titulo do primeiro sujeito. Desta
forma, as categorias sem esquemas são apenas funções do Entendimento rela tivas aos
conceitos sem que representem qualquer objeto. Sua significação provém da sensibilidade
que realiza o Entendimento a par de limitá -lo.
CAPITULO II
Sistema de todos os princípios do entendimento puro
Examinamos no capítulo precedente a faculdade transcendental de julgarmos somente
sob o ponto de vista das condições gerais necessárias para aplicação dos conceitos puros do
Entendimento aos juízos sintéticos. Exporemos, agora, em ordem sistemática os julgamentos
que o Entendimento forma “a priori” sob esta reserva crítica. Nossa tabela de categorias darnos-á infalivelmente para isto um guia natural e seguro.
Justamente a relação dessas categorias com a experiência possível é a que deve
constituir “a priori” todos os conceitos puros do Entendimento e, por conseguinte, a sua
relação com a sensibilidade geral é que nos fará conhecer integralmente e sob a forma de um
sistema, todos os princípios transcendentais do uso do Entendimento.
Os princípios “a priori” levam esse nome, não somente porque servem de fundamento
ao dos juízos, mas também porque, por sua vez, estão baseados em conhecimentos mais
elevados e gerais. Mas essa propriedade não os dispensa, sempre, sem embargo, de uma
prova.
Embora esta prova não possa ser estabelecida mais objetivamente e sirva antes de
fundamento a todo conhecimento do seu objetivo, não impede que seja impossível e até
necessário tirá-la das fontes subjetivas que possibilitam o conhecimento de um objeto em
geral. De não ser assim, fica o princípio exposto à grave suspeita de ser mera e subreptícia
afirmativa.
Limitar-nos-emos simplesmente aos princípios que se referem às categorias. Vamos
prescindir assim, no campo das nossas investigações, dos princípios da Estética
transcendental, segundo os quais, Tempo e Espaço são as condições da possibilidade das
coisas como fenômenos e também, da restrição desses princípios, de que não podem aplicarse às coisas em si mesmas. Tampouco fa zem parte desse sistema os princípios matemáticos,
porque procedem da intuição e não dos conceitos puros do Entendimento.
Sendo juízo sintético “a priori” terá aqui sua possibilidade necessariamente de um
lugar, mas não apenas para demonstrar sua exatidão nem a certeza apodítica, o que é
desnecessário, senão unicamente para poder compreender e deduzir a possibilidade desta
espécie de conhecimentos evidentes “a priori”.
Falaremos também do princípio dos juízos analíticos em oposição aos juízos sintéticos,
que são dos que necessariamente temos que nos ocupar, porque opondo-os uns aos outros nos
livraremos dos equívocos na teoria dos últimos e torna remos mais visível sua própria
natureza.
Primeira Seção
Do princípio supremo de todos os juízos analíticos
A condição universal, embora puramente ne gativa, de todos os nossos juízos em geral,
seja qual for o conteúdo do nosso conhecimento e a maneira que estiver em relação com o
objeto, é a de não se contradizerem a si mesmos, e se assim não for são de per si nulos
(mesmo independentemente do objeto). Pode acontecer também que mesmo nosso juízo não
contendo qualquer contradição, que junte os conceitos de maneira contrária ao objeto e que
não se baseiam em fundamentos “a priori” e “a posteriori” e por isso que seja falso ou mal
fundamentado, sem conter, sem embargo uma contradição interior.
Este conceito, pelo qual um predicado está em contradição com uma coisa que não lhe
convém, chama -se o “princípio de contradição”. É este um critério universal da verdade,
embora meramente negativo, pelo que pertence exclusiv amente à Lógica em virtude de se
aplicar aos conhecimentos considerados apenas como conhecimentos em geral e
independentemente do seu conteúdo, limitando-se a declarar que a contradição o destrói
completamente.
Pode-se fazer dele, entretanto, um uso positivo; isto é, não somente para rechaçar o erro
(embora se baseie em uma contradição), senão também para conhecer a verdade. Porque se o
juízo é analítico, quer seja afirmativo ou negativo, sempre poderemos conhecer perfeitamente
a verdade por meio do princípio de contradição. De fato, o contrário do que já está contido
como conceito ou do que é concebido no conhecimento do objeto, será negado sempre com
razão, e necessariamente afirma-se esse conceito porque o contrário a este conceito estaria em
contra dição com o objeto.
Devemos, pois, dar valor ao princípio de contradição, um princípio universal e
suficiente para todo conhecimento analitico, porém, até aí somente chega a ser usado como
critério suficiente da verdade. Este princípio é a condição “sine qua non” de nossos
conhecimentos, porque nenhum deles pode ser contrário sem destruir-se por si mesmo,
embora não possa ser destruido o princípio determinante da verdade do nosso conhecimento.
Agora temos apenas que ocupar-nos da parte sintética do nosso conhecimento e
cuidaremos de não ir contra esse inviolável princípio, embora nada possamos esperar dele
que nos sirva de luz para a verdade nesta espécie de conhecimentos.
Existe uma fórmula deste célebre princípio, embora puramente formal, que contém uma
síntese que indevida e desnecessariamente passou com o próprio princípio. A fórmula é esta:
é impossível que uma coisa seja e não seja ao mesmo tempo. Além de aplicar aqui a certeza
apodítica (pela palavra “impossível”) de um modo supérfluo, porque ela mesma se
subentende pela proposição, fica esta afetada pela condição do Tempo.
Diz isto: uma coisa = A, que é algo = B, não pode ao mesmo tempo ser não B. Porém,
isto não impede que sucessivamente possam ser ambas as coisas (B igual a não B). Por
exemplo, o homem que é moço não pode ser ao mesmo tempo velho, porém, esse mesmo
homem pode ser jovem num tempo e em outro não jovem, isto é, velho.
Mas, o princípio da contradição, como princípio puramente lógico, não deve limitar
suas afirmativas às relações de tempo, pelo que essa fórmula é completamente contrária ao
seu fim. A confusão provém de que após termos separado um predicado de uma coisa, do
conceito desta, une -se a seguir a esse predicado seu contrário, o que ja mais dá uma
contradição com sujeito mas apenas com o predicado que lhe foi anexado sinteticamente, e
contradição que somente se apresenta quando se põe o primeiro e o segundo predicados num
mesmo tempo.
Se eu disser: um homem que é ignorante não é instruído, tenho que acrescentar a
condição: ao mesmo tempo, mesmo porque o ignorante numa época pode ser instruído em
outra, mas se eu afirmar: nenhum homem ignorante é instruído, a proposição então é
analítica, porque o caráter da ignorância constitui aqui o conceito do sujeito, resultando
imedia tamente esta proposição negativa do princípio de contradição, sem ser necessário
acrescentar a condição ao mesmo tempo.
É esta a razão porque anteriormente troquei a fórmula desse princípio, de sorte que o
caráter analítico de proposição está claramente exposto.
Segunda Seção
Do princípio supremo de todos os juízos sintéticos
A explicação da possibilidade dos juízos sintéticos, em geral, é um problema que nada
tem que ver com a Lógica geral, nem precisa sequer conhecer-lhe o nome. Não é assim na
Lógica transcendental, onde o seu assunto mais importante e até podemos dizer o único,
consiste na in vestigação da possibilidade dos juízos “a priori” suas condições e extensão de
seu valor; porque somente depois de haver preenchido este cometimento é quando está em
condições de cumprir sua finalidade, consistente em determinar a extensão e os limites do
Entendimento.
Nos juízos analíticos não preciso sair do conceito dado para dizer algo sobre esse
conceito. Se o juízo for afirmativo, apenas acrescento ao conceito o que nele estava já
pensado; se for negativo excluirei do conceito seu contrário.
Nos juízos sintéticos é preciso que eu saia do conceito dado a fim de considerar sua
relação com outra coisa do que nele se pensava; por conseguinte, essa relação não é nunca
uma relação de identidade nem de contradição e, por isso mesmo, não pode o juízo apresentar
nem erros nem verdades.
Admitindo, pois, que é necessário sair de um conceito dado para compará-lo
sinteticamente com outro, devemos também admitir um terceiro termo no qual possa ter lugar
a síntese dos dois conceitos.
Qual será, então, esse terceiro termo, que é como o meio de todos os juízos sintéticos?
Somente poderá ser um conjunto no qual este jam compreendidas todas as nossas
representa ções; isto é, o sentido interno e a sua forma “a priori”, ou Tempo. A síntese da
representação radica na imaginação, porém, sua unidade sintética (que o juízo exige) está
baseada na unidade da apercepção.
Agora é mister buscar a possibilidade dos juízos sintéticos e como também esses três
termos possuem fontes de representações “a priori”, a possibilidade dos juízos sintéticos “a
priori”; e serão também necessários pôr esses princípios quando precisarmos um
conhecimento dos objetivos que se baseiam exclusivamente na síntese das representações.
A fim de que um conhecimento possa ter uma realidade objetiva, isto é, referir-se a um
objeto, encontrando seu valor e sua significação, é necessário que o objeto possa ser dado de
alguma forma. Sem isto, os conceitos são vãos e qualquer coisa que assim for concebida será
como se nada tivesse sido feito: é apenas brincar com representações. Dar um objeto se neste,
ao mesmo tempo, não se pensar imediatamente, se não representar imediatamente na
intuição, é apenas relacionar s ua representação com a experiência (real ou possível).
Espaço e Tempo são seguramente conceitos puros de todo elemento em perigo e, por
conseguinte, representados “a priori” em nosso espírito; mas, mesmo assim, careceriam de
todo valor obje tivo e significação se a sua aplicação não fosse necessária nos objetivos da
experiência.
A própria representação é apenas um esquema que sempre se refere à imaginação
produtiva, aquela que provoca os objetivos da experiência, sem os quais não teriam nenhuma
significação e, mesmo assim, com todos os conceitos, sem distin ção.
É, pois, a “possibilidade de experiência” o que dá realidade objetiva a todos os nossos
conhecimentos “a priori”. A experiência, porém, baseia -se na unidade sintética dos
fenômenos, isto é, na síntese do objeto dos fenômenos em geral, e segundo conceitos, síntese
sem a qual a experiência nem os conhecimentos seriam senão como uma rapsódia de
percepçôes sem qualquer seqüência entre si, segundo as regras de uma consciência única
(possível), e não serviriam assim à unidade transcendental necessária da apercepção.
Desta forma, a experiência fundamenta -se em princípios que determinam sua forma “a
priori”, isto é, regras gerais que constituem a unidade na síntese dos fenômenos, regras que
podem sempre demonstrar sua realidade objetiva e possibilidade na experiência, como
condições necessárias. Fora isto, são absolutamente impossíveis as proposições sintéticas “a
priori”, porque lhes falta um terceiro termo, isto é, um objetivo puro no qual a unidade
sintética dos seus conceitos possa estabelecer a sua realidade objetiva.
Mesmo que do Espaço em geral e das figuras que nele a imaginação produtiva descreve
conhe cemos “a priori” muitas coisas por meio de juízos sintéticos, sem necessitarmos para
isso da experiência, este conhecimento seria apenas uma vã quimera se o Espaço não fosse
aceito como condição de fenômenos que constituem a matéria da experiência externa.
Os juízos sintéticos puros referem-se, pois, embora de um modo mediato, à experiência
possível, ou melhor ainda, à sua própria possibilidade e nisso, unicamente, fundamentam o
valor objetivo da sua síntese.
Sendo, pois, a experiência, como síntese empírica em sua possibilidade, o único modo
de conhe cimento que dá realidade a toda outra síntese, esta, como de conhecimento “a
priori”, não é verdadeira (em desconformidade com o objeto), senão enquanto não contém
mais que o que é necessário à unidade sintética da experiência em geral.
O princípio supremo de todos os juízos sintéticos é, pois, que todo objeto está
submetido às condições necessárias à unidade sintética da diversidade da intuição numa
experiência possível.
Assim, são possíveis os julgamentos sintéticos “a priori” quando referimos condições
formais da intuição “a priori”, a síntese da imaginação e sua unidade necessária numa
apercepção transcendental, a um conhecimento experimental possível em geral e que
podemos dizer: as condições da possibilidade da experiência” em geral são ao mesmo tempo
as da “possibilidade dos objetivos da experiência”, e é por isso que têm um valor objetivo
num juízo sintético “a priori”.
Terceira Seção
Representação sistemática de todos os princípios sintéticos do entendimento puro
Se existem em geral princípios é, unicamente, por obra do entendimento puro, o que
não é só a faculdade de conceber regras em relação com o que sucede, mas também a fonte
mesma dos prin cípios pelos quais tudo (o que só se pode apresentar-nos como objeto) é
submetido a regras, porque sem elas não poderíamos jamais aplicar aos fenômenos os
conhecimentos de seu objeto correspondente. Quando se consideram as mesmas leis da
natureza como princípios do uso empírico do entendimento, implicam então um caráter de
necessidade, e, por conseguinte, a presunção pelo menos de que estão determinadas por
princípios que valem “a priori”, e anteriores a toda experiência. Mas todas as leis da natureza,
sem distinção, estão sujeitas a princípios superiores do entendimento, posto que não são mais
que suas aplicações a casos particulares do fenômeno.
Estes princípios, por conseqüência, são os únicos que dão a regra e em certo modo o
expoente de uma regra em geral; ao mesmo tempo que a expe riência, o caso que se deve
submeter à regra.
Não se deve temer aqui se tomarmos princípios simplesmente empíricos por princípios
do Entendimento puro, ou vice-versa; porque a necessidade intelectual ontológica que
caracteriza os princípios do entendimento puro e cuja ausência é fácil de constatar em todos
os princípios empíricos, por gerais que sejam, podem sempre evitar essa confusão. Há, no
entanto, princípios puros “a priori”, que propriamente não posso atribuir ao Entendimento
puro, porque não procedem de conceitos puros (ainda que por mediação do entendimento),
quando o entendimento é faculdade de conceitos.
Neste caso se encontram os princípios das ma temáticas; sua aplicação, no entanto, à
experiência, e, por conseguinte, seu valor objetivo e até a possibilidade mesma do
conhecimento sintético “a priori” desses princípios (sua dedução), assentam sempre no
Entendimento puro. Não colocarei, pois, entre meus princípios os das matemáticas, mas
somente aqueles em que se funda sua possibilidade e seu valor objetivo “a priori”, e que, por
conseguinte, devem ser considerados como os princípios desses princípios, porque procedem
dos conceitos à intuição e não da intuição aos conceitos.
Na aplicação dos conceitos puros do entendimento à experiência possível, tem sua
síntese um uso matemático ou dinâmico, porque se refere, simplesmente, em parte à intuição
e em parte à existência de um fenômeno em geral. Mas as condições “a priori” da intuição
são absolutamente necessárias em relação a uma experiência possível, enquanto que as da
existência de objetos de uma intuição empírica possível são por si mesmas contingentes. Os
princípios do uso matemático serão, pois, absolutamente necessários; quer dizer, apodíticos,
enquanto que os de uso dinâmico só te rão o caráter de necessidade “a priori”, sob a condição
de um pensamento empírico na experiência, por conseguin te, nada mais do que de um modo
mediato e indireto.
Não terão, pois, estes, a evidência imediata que é peculiar aos primeiros (sem prejuízo,
não obstante, de sua certeza em relação com a experiência em geral). Tudo isto há de ser
compreendido muito melhor no final deste sistema de prin cípios.
A tábua de categorias nos dá, naturalmente, o plano dos princípios, pois estes não são
mais que as regras de uso objetivo das categorias. Todos os princípios do entendimento são,
pois:
1
AXIOMAS DA
INTUIÇÃO
2
ANTECIPAÇÕES DA
PERCEPÇÃO
3
ANALOGIAS DA
 EXPERIÊNCIA
4
POSTULADOS DO
PENSAMENTO EMPIRICO EM
GERAL
Adrede escolhi estas denominações para que sobressaiam as diferenças que têm sob o
ponto de vista da experiência e da prática. Depois se advertirá que quanto à evidência e à
determinação “a priori” dos fenômenos, segundo as categorias da quantidade e qualidade
(atendendo só à forma desses fenômenos), que os princípios destas cate gorias diferem
consideravelmente dos das outras duas; pois as primeiras têm só uma certeza intuitiva e as
segundas, simplesmente discursiva, por mais que uns e outros tenham uma certeza perfeita.
Por isto chamo aos primeiros princípios mate máticos e aos segundos, dinâmicos.(17)
 Tenho de advertir que não atendo aqui mais aos princípios matemáticos em um caso
que aos da dinâmica geral (Física) em outro, mas única e exclusivamente aos do
entendimento puro em sua relação com o sentido interno (sem distinção das representações
que nele se dão). Ao denominá-las assim, faço-o mais em virtude de sua aplicação do que no
do seu conteúdo, e empreendo agora seu exame segundo a ordem em que são apresentados.
I — Axiomas da Intuição
Princípio: Todas as intuições são quantidades extensivas
PROVA
Todos os fenômenos compreendem, quanto à forma, uma intuição no espaço e no
tempo que lhes serve de fundamento “a priori”. Eles não podem ser apreendidos, isto é,
recebidos na consciência empírica, senão por meio desta síntese do diverso, pela qual são
produzidas as representa ções de um espaço ou de um tempo determinados; quer dizer, pela
composição de seus elementos homogêneos e pela consciência da unidade sintética destes
elementos diversos (homogêneos). Mas a consciência da diversidade homogênea na intuição
em geral, enquanto que a representação de um objeto só assim é possível, consiste no
conceito de uma quantidade (“quanti”).
Conseguintemente, a mesma percepção de um objeto, como fenômeno, não é possível
senão por meio dessa mesma unidade sintética do diverso na intuição sensível, unidade pela
qual a da decomposição do homogêneo diverso se concebe no conceito de uma quantidade;
quer dizer, que os fenômenos são todos quantidades, e melhor, quantidades extensivas,
porque são representados necessariamente como intuições no espaço ou no tempo, mediante
esta mesma síntese pela qual se determinam em geral espaço e tempo.
Denomino quantidade extensiva aquela em que a representação das partes torna
possível a do todo (a que necessariamente precede). Não posso representar-me uma linha, por
pequena que seja, sem traçá-la no pensamento; quer dizer, sem reproduzir sucessivamente
todas as partes de um ponto a outro, e sem fazer com esta plástica a in tuição. O mesmo
sucede com qualquer parte do tempo, por pequena que seja. Eu não posso concebê-la senão
por meio de uma progressão sucessiva que vai de um momento a outro; e da adição de todas
estas partes do tempo resultará logo uma quantidade de tempo determinada.
Como a intuição pura em todos os fenômenos é o espaço ou tempo, todo fenômeno,
enquanto intuição, é uma quantidade extensiva, porque não pode conhecer-se senão por meio
de uma síntese sucessiva (de parte a outra) que a apreensão verifica. Todos os fenômenos,
pois são primeiramente percebidos como agregados (como multidão de partes dadas já antes),
o que não sucede sempre em todas as classes de quantidades, mas somente nas que
representamos e aprendemos como extensivas.
Aqui, nesta síntese sucessiva da imaginação produtiva na criação de figuras, é que se
fundam as matemáticas da extensão (Geometria) com seus axiomas, que exprimem as
condições da intuição sensível “a priori”, que são as únicas que possibilitam o esquema de
um conceito puro da intuição externa, como por exemplo, que entre dois pontos não cabe
mais que uma só linha reta possível, ou que duas linhas retas não contêm um espaço, etc. São
estes axiomas que não se referem propria mente senão a “quanta”, como tais.
Relativamente à quantidade (“quantitas”), quer dizer, à questão de saber qual é o
tamanho de uma coisa, sobre isto não há axiomas no verda deiro sentido da palavra, por mais
que muitas destas proposições sejam sintéticas e imediatamente certas (“indemonstrabilia”).
Porque, que o par aditado ao par ou tirado do par dê o par, são estas proposições analíticas,
posto que tenho consciência imediatamente da identidade da produção de uma quantidade
com a outra. Os axiomas, pelo contrário, devem ser princípios sintéticos “a prio ri".
As proposições evidentes que exprimam as re lações numéricas são seguramente
sintéticas, pelo que não merecem o nome de axiomas senão só o de fórmulas numéricas. A
proposição de 7 + 5 = 12 não é de modo algum analítica. Com efeito, eu não penso o número
12 nem na representação de 7, nem na de 5, mas naquela da união desses dois números (que
eu concebo necessaria mente na adição dos dois, embora aqui não seja essa questão
apropriada, porque em uma proposição analítica não se trata de saber se eu concebo
realmente o predicado na apresentação do sujeito).
Mas ainda que sintética, esta proposição é particular. Enquanto aqui só consideramos a
síntese das quantidades homogêneas (das unidades), esta só de uma maneira pode realizar-se,
por mais que depois seja o uso destes números geral.
Quando digo: um triângulo se constrói com três linhas, em que duas junta s podem ser
maiores que a terceira, não há nisso mais do que pura função da imaginação produtiva, que
pode traçar linhas mais ou menos grandes e fazer com que formem toda classe de ângulos.
O número 7, pelo contrário, não é possível senão por uma só maneira, e assim também
o 12, produzido pela síntese do primeiro com o 5. Tais proposições, pois, não podem chamarse axiomas (pois do contrário haveria um número infinito), mas fórmulas numéricas.
Esse princípio transcendente da ciência ma temática dos fenômenos estende
consideravelmente nosso conhecimento “a priori”, porque só por ele podem as matemáticas
puras aplicar-se com toda a sua precisão aos objetos da experiência, e sem ele não só não
seria evidente por si mesma sua aplicação, como também daria margem a certas contradições.
Os fenômenos não são coisas em si. A intuição empírica é possível só pela intuição pura (de
tempo e espaço).
Desde então não se poderia pretextar que os objetos dos sentidos não devem conformarse as leis da construção no espaço (p. ex.: com a infinita divisibilidade das linhas ou dos
ângulos); porque assim se negaria ao mesmo tempo todo valor objetivo ao espaço e com ele a
todas as matemáticas, e não se saberia já por que nem até que ponto são estas aplicáveis aos
fenômenos.
A síntese de espaços e tempos é o que possibilita, como formas essenciais de toda
intuição, a apreensão do fenômeno, e, por conseguinte, toda experiência externa, e também
todo o conhecimento de objetos da experiência. E tudo quanto provém da Matemática em sua
aplicação pura a esta síntese vale também, necessariamente, para a experiência.
Todas as objeções feitas contra não passam de argúcias de uma razão pouco ilustrada
que erroneamente crê que pode libertar aos objetos dos sentidos da condição formal de nossa
sensibilidade e que os representa como objetos em si dados ao entendimento, ainda que não
sejam mais do que fenômenos. Se assim fosse, nada deles poderia seguramente ser conhecido
“a priori"; e, por conseguinte, mediante os conceitos puros do espaço e a ciência que os
determina, a Geometria seria impossível.
II — Antecipações da Percepção
Princípio: Em todos os fenômenos, o real, que é um objeto da sensação, tem uma
qualidade intensiva, quer dizer, um grau
PROVA
A percepção é a consciência empírica, isto é, a consciência acompanhada de sensação.
Os fenômenos como objetos da apercepção não são intuições puras (puramente formais)
como o espaço e o tempo (que não podem ser percebidos em si mesmos). Eles contêm, pois,
além da intuição, a matéria de qualquer objeto em geral (pelo qual é apresentada qualquer
coisa de existente no espaço ou no tempo), quer dizer o real da sensação, considerado como
uma representação puramente subje tiva de que se não pode ter consciência senão enquanto o
sujeito é afetado, e que relaciona este com um objeto qualquer.
Mas pode ter lugar uma transformação gra dual da consciência empírica em pura, em
que o real da primeira desapareça por completo e que não reste mais do que uma consciência
puramente formal “a priori” da diversidade contida no espaço e no tempo; por conseguinte,
pode haver também uma síntese da produção da quantidade de uma sensação depois de seu
começo: a intuição pura — 0, até uma grandeza qualquer. E como a sensação não é por si
mesma uma representação objetiva, não havendo nela nem intuição do espaço nem do tempo,
ela não tem grandeza extensiva, ainda que tenha uma quantidade (por meio da sua apreensão,
onde a consciência empírica pode crescer em um certo tempo depois do nada até um grau
dado), e por conseguinte ela tem uma grandeza intensiva, à qual deve corresponder também
em todos os objetos da percepção enquanto esta contém uma sensação, quer dizer, um grau
de influência nos sentidos.
Pode chamar-se antecipação a todo conhecimento pelo qual posso conhecer e
determinar “a priori” o que pertence ao conhecimento empírico, e essa é seguramente a
significação que dava Epicuro. Mas como existe nos fenômenos algo que jamais é conhecido
“a priori”, e que constitui desse modo a diferença verdadeira entre o empirismo e o
conhecimento “a priori”, e que esse algo é a sensação (como material da percepção) segue -se
que o que propriamente não pode ser antecipado é a sensação. Poderemos, pelo contrário, denominar às determinações puras no espaço e no tempo, já com relação à figura, já pela
quantidade, antecipações de fenômenos porque representam “a priori” o que sempre pode
dar-se “a posteriori” na experiência.
Suponhamos, porém, que exista algo que possa conhecer-se “a priori” em cada
sensação, considerada como uma sensação geral (sem que uma sensação particular se tenha
dado); esse algo mereceria também chamar-se antecipação, ainda que em sentido
excepcional. Digo excepcional, porque é bem estranho, certamente, antecipar sobre a
experiência naquilo mesmo que constitui a sua matéria e que só dela pode tomar-se. Isto é,
entretanto, o que aqui sucede.
A apreensão não enche, só com a sensação, senão um instante (não se fala aqui da
sucessão de várias sensações). Enquanto ela é no fenômeno alguma coisa cuja apreensão não
é uma síntese sucessiva que precede indo das partes à representação total, esta apreensão, por
conseguinte, carece de quantidade extensiva; a ausência de sensação no mesmo instante
representaria este instante como vazio, como igual a zero. O que corresponde à sensação na
intuição empírica é, pois, realidade (“realiter phaenomenon”); e o que corresponde à ausência
da sensação é a negação. Ademais, toda sensação é suscetível de diminuição, de tal sorte que
ela pode decrescer e desaparecer insensivelmente.
Há, pois, entre a realidade no fenômeno e a negação, uma cadeia contínua de sensações
intermediárias possíveis, entre as quais há sempre menos diferença que entre a sensação dada
e o zero ou a inteira negação. Isto é o mesmo que dizer que o real em um fenômeno tem
sempre uma quantidade, mas que esta quantidade não se acha na apreensão, posto que esta se
verifica no instante por meio da simples sensação e não por uma síntese sucessiva de muitas
sensações, não procedendo, por conseguinte, das partes ao todo. Tem, pois, uma quantidade,
mas que não é exterior.
Agora, a esta quantidade, que só como unidade se apreende, e em que a pluralidade não
pode ser representada mais do que por aproximação à negação, denomino-a quantidade
intensiva. Toda realidade no fenômeno tem, pois, uma quantidade intensiva, quer dizer, um
grau. Quando se considera esta realidade como causa (seja da sensação ou de outra realidade
no fenômeno, por exemplo, de uma mudança), denominamo-la um momento, p. ex.: o
momento da gravidade, e isto porque o grau não designa senão a quantidade cuja apreensão
não é sucessiva, mas momentânea. Toco neste ponto, de passagem, pois ainda não vou tratar
da causalidade.
Toda sensação, e por conseguinte também toda realidade no fenômeno, por pequena
que seja, tem um grau; quer dizer, uma quantidade intensiva que todavia pode ser diminuída,
havendo entre a realidade e a negação uma série contínua de realidades e de percepções
possíveis, cada vez menores. Uma cor qualquer, p. ex.:, a vermelha, possui um grau que, por
pequeno que seja, nunca é o último menor possível; ocorre o mesmo com o calor, com o
momento da gravidade, etc.
A propriedade das quantidades que faz com que nenhuma de suas partes seja a menor
possível nelas (nenhuma parte é simples) é o que se chama sua continuidade. Espaço e tempo
são quantidades contínuas (“quanta” contínua), porque nenhuma de suas partes pode dar-se
sem estar contida em limites (pontos e instantes), e de tal sorte que essa mesma parte não seja
por sua vez um espaço ou um tempo. O espaço, pois, não se compõe senão de espaços, e o
tempo, de tempos.
Os instantes e os pontos não são limites do tempo e do espaço; quer dizer,
simplesmente os lugares de sua circunscrição. E estes lugares supõem sempre intuições que
os limitam ou determinam, e nem tempo nem espaço podem conceber-se como compostos de
simples lugares de partes integrantes que se supõem dadas anteriormente. Pode chamar-se a
esta classe de quantida des fluentes, porque a síntese (da imaginação criadora) as produz por
uma progressão no tempo, cuja continuidade se designa geralmente com a palavra fluxão.
Todos os fenômenos em geral são, pois, quantidades contínuas, tanto por sua intuição,
ao ser quantidades extensivas, como também por sua simples percepção (sensação e, por
conseguinte, realidade) como quantidades intensivas. Quando se interrompe a síntese da
diversidade dos fenômenos, essa diversidade não é então um fenômeno como “quantum”,
mas simplesmente um agregado de vários fenômenos, produto da repetição de uma síntese
sempre interrompida, em vez de ser pela simples progressão da síntese geradora de uma
espécie dada. Quando digo que 13 thalers repre sentam certa quantidade de dinheiro, sirvo-me
de uma expressão exata se com isso entendo um marco de prata fina.
Esse marco de prata é seguramente uma quantidade contínua na qual não há parte
alguma que seja a menor possível, e onde cada parte podia formar uma moeda que por sua
vez conteria sempre matéria para outras menores. Mas se entendo por aquela expressão 13
thalers redondos, quer dizer, 13 moedas (qualquer que seja o seu valor), será impróprio que a
isso denomine eu uma quantidade de thalers; é mister chamá-lo um agregado, quer dizer, um
número de moedas. E como em todo número é necessária uma unidade que sirva de
fundamento ao fenômeno, como unidade, é um “quantum”, e como tal sempre um contínuo.
Como todos os fenômenos, considerados bem como extensivos ou como intensivos, são
quantidades contínuas, a proposição de que toda mudança (passagem do estado de uma coisa
para outra) é contínua, poder-se-ia demonstrar aqui facilmente e com evidência matemática
se a causalidade de uma mudança em geral não estivesse por completo fora dos limites da
Filosofia transcendental e não supusesse princípio s empíricos. Por que possa existir uma
causa que mude o estado das coisas, quer dizer, que as determine em um sentido contrário a
certo estado dado, sobre isso o entendimento nada nos diz “a priori”, e não só porque não
veja a possibilidade (o que nos falta na maior parte dos conhecimentos “a priori”), mas
também porque a mutabilidade atinge tão-só a certas determinações dos fenômenos que só a
experiência pode demonstrar-nos, enquanto que a causa permanece no imutável.
Mas, como aqui só dispomos dos conceitos puros, fundamentais de toda experiência
possível, e nos quais nada de empírico deve haver, não podemos, sem quebrar a unidade do
sistema, antecipar nada da Física geral, fundados sobre certos princípios da experiência.
Não carecemos, não obstante, de provas que demonstrem a grande influência de nosso
princípio na antecipação das percepções, e até suprindo-as também, de sorte que evita as
falsas consequências que poderiam tirar-se.
Se toda realidade na percepção tem um grau, entre esse grau e a negação há uma série
infinita de graus sempre menores, e, não obstante, cada sentido deve ter um grau determinado
de receptividade para as sensações. Não existe, pois, percepção, e por conseguinte
experiência, que prove, quer imediata, quer mediatamente (qualquer caminho que se escolha
para chegar a essa conclu são), a ausência absoluta de toda realidade no fenômeno; que da
experiência não se pode tirar a prova de um espaço ou de um tempo vazios.
Primeiramente, a ausência absoluta de realidade na intuição sensível não pode nem ser
percebida; depois, tampouco, pode deduzir-se a de ne nhum fenômeno particular, nem da
diferença de seus graus de realidade, e não se pode admitir nunca para explicar esta realidade.
Efetivamente, ainda que toda intuição de um espaço e de um tempo determinado seja
inteiramente real, quer dizer, que nenhuma parte desse espaço ou tempo esteja vazio, não
obstante, como toda realidade possui o seu grau, que pode decrescer segundo uma infinidade
de graus inferiores até o nada, sem que a grandeza extensiva do fenômeno cesse de ser a
mesma, deve haver uma infinidade de graus diferentes enchendo o espaço e o tempo, e a
grandeza intensiva nos diversos fenômenos deve poder ser menor ou maior, ainda que a
grandeza extensiva da intuição permaneça a mesma. Daremos um exemplo.
Os fisicos, ao notarem uma grande diferença na quantidade de matéria contida em um
mesmo volume em corpos de diversas espécies (pelo peso ou pela resistência oposta a outras
matérias em movimento), pensaram que esse volume (quantidade extensiva do fenômeno)
deveria conter o vazio em todas as matérias, ainda que em proporções distintas. Quem havia
de pensar que esses naturalistas, em sua maioria matemáticos e me cânicos, fundavam sua
conclusão em uma simples hipótese metafísica, que tanto pretenderam evitar?
É isso o que fazem, no entanto, ao admitirem que o real no espaço (não digo aqui
impenetrabilidade ou peso, porque são conceitos empíricos) é em todas as partes idêntico, e
que não pode distinguir-se mais do que pela quantidade extensiva; quer dizer, pela
pluralidade. A esta suposição, que não tem nenhum fundamento na experiência e que é
puramente metafísica, eu oponho uma prova transcendental, que na verdade não explica a
diferença na maneira como o espaço se ocupa, mas que suprime por completo a suposta
necessidade de supor que esta diferença só pode explicar-se admitindo os espaços vazios, e
que, pelo menos, tem a vantagem de permitir ao espírito que a conceba de qualquer outra
maneira, se a explicação física exige aqui qualquer hipótese.
E, em verdade, vemos que se espaços iguais podem perfeitamente ser ocupados por
matérias distintas, de tal sorte que em nenhum deles haja um ponto em que a matéria não
esteja presente, todavia, todo real da mesma quantidade tem seu grau (de resistência ou
gravidade) que pode ir diminuindo, sem que a quantidade extensiva ou a pluralidade
diminuam ou desapareçam no vazio. Assim, uma dilatação que ocupa um espaço, por
exemplo, o calor ou qualquer outra realidade (fenomenal), pode ir minguando por graus até o
infinito, sem deixar por isso vazia a menor parte do espaço, enchendo então o espaço com
esses graus inferiores, o mesmo que encheria com outro fenômeno, com outros mais
elevados.
Não pretendo afirmar aqui que seja esta a razão da diferença das matérias quanto ao seu
peso específico, mas só demonstrar por um princípio do entendimento puro que a natureza de
nossas percepções possibilita essa explicação, e que é um erro considerar ao real do
fenômeno como sendo igual quanto ao grau, e que não difere senão por sua agregação e sua
quantidade extensiva, e também crer que afirmo isso “a priori” por um princípio do
entendimento.
Para um investigador afeito às considerações transcendentais, e, por conseguinte,
circunspecto, esta antecipação de percepção é algo chocante, e não pode deixar de arquitetar
alguma dúvida sobre a faculdade do entendimento de antecipar uma proposição sintética,
como a de grau de toda realidade nos fenômenos, e, por conseguinte, a possibilidade da
diferença intríseca da sensação mesma, abstração feita de sua qualidade empírica. É pois,
uma questão muito importante, saber como o entendimento pode aqui decidir “a priori” e
sinteticamente sobre fenômenos, e antecipá-los no que é própria e simplesmente empírico;
quer dizer, no que tange à sensação.
A qualidade da sensação é sempre puramente empírica, e não pode representar-se “a
priori” (p. ex.: a cor, o gosto, etc). Mas o real que corresponde às sensações em geral, por
oposição à negação, representa só algo cujo conceito contém em si uma existência e não
significa mais do que a síntese em uma consciência empírica em geral. Com efeito, no
sentido interno, a consciência empírica pode elevar-se do nada até um grau superior qualquer,
de sorte que a mesma quantidade extensiva da intuição (como uma superfície iluminada)
pode excitar uma sensação tão grande como outras muitas reunidas (superfícies menos
iluminadas).
Pode-se, pois, fazer completa abstração da quantidade extensiva do fenômeno e
representar-se, não obstante, em um momento só na sensação, uma síntese da graduação
uniforme que se eleva desde nada até uma consciência empírica dada. Todas as sensações
estão, pois, como tais, dadas somente “a posteriori”, mas a propriedade que possuem de ter
um grau pode ser conhecida “a priori".
Assim é de notar que não podemos conhecer “a priori” nas quantidades em geral mais
que uma só qualidade, a saber, a continuidade, e em toda qualidade (no real do fenômeno)
sua quantidade intensiva, quer dizer, a propriedade que ela tem de ter um grau; o restante
pertence à experiência.
III — Analogias da Experiência
Princípio: A experiência só é possível pela representação de uma ligação necessária
das percepções
PROVA
A experiência é um conhecimento empírico; quero dizer, um conhecimento que
determina seu objeto por percepções. É, pois, uma síntese de percepções que não está contida,
nessas percepções, mas encerra a unidade sintética de sua diversidade no seio de uma
consciência, unidade que constitui o essencial de um conhecimento dos objetos dos sentidos,
quer dizer, da experiência (e não somente da intuição ou da sensação dos sentidos). Na
experiência, as percepções não se rela cionam umas com as outras senão de um modo
acidental, de tal sorte que das percepções mesmas não resulta nem pode resultar entre elas
qualquer ligação necessária; a apreensão, com efeito, não é senão uma composição do diverso
da intuição empírica, e não se dá nela nenhuma representação da necessidade da união de
fenômenos que em espaço e tempo ela forma.
Mas, como a experiência é um conhecimento de objetos por meio de percepções, e que
por conseguinte a relação na existência do diverso deve representar-se na experiência, não
como esse diverso está composto no tempo, mas tal como é objetivamente o tempo; e como,
de outra parte o tempo mesmo não pode ser percebido, segue-se que não se pode determinar a
existência de objetos no tempo, senão tal como objetivamente é o tempo; e como, de outra
parte, o tempo mesmo não pode ser percebido, segue -se que não se pode determinar a
existência de objetos no tempo pela sua união no tempo em geral, quer dizer, por meio de
conceitos que os unam “a priori”.
Entretanto, como esses conceitos vão sempre acompanhados da necessidade, a
experiência não é possível senão por me io de uma representação da ligação necessária das
percepções.
Os três modos do Tempo são a permanência, a sucessão e a simultaneidade. Daí três
leis que regulam todas as relações cronológicas dos fenôme nos, e segundo as quais a
existência de cada um dele s pode ser determinada em relação à unidade de todo o tempo, e
essas leis são anteriores a toda experiência, que elas tornam possível. O princípio geral destas
três analogias assenta sobre a unidade necessária da apercepção, relativamente a toda
consciência empírica possível (da percepção) em cada tempo, e por conseguinte porque essa
unidade é um fundamento “a priori”, sobre a unidade sintética de todos os fenômenos sob o
ponto de vista de sua relação no tempo.
Efetivamente a percepção originária se rela ciona com o senso íntimo (ao conjunto de
todas as representações) e “a priori” com a sua forma, quer dizer, com a relação dos
elementos diversos da consciência empírica no tempo. Ora, todos esses elementos diversos
devem ser ligados, conforme suas relações de tempo, na percepção originária, porque é isso o
que exprime a unidade sob a qual entra tudo quanto deve fazer parte de meu conhecimento
(quer dizer, de meu próprio conhecimento), e, por conseguinte, tudo quanto pode ser um
objeto para mim.
Esta unidade sintética na relação cronológica de todas as percepções que é determinada
“a priori”, é pois a lei que faz com que todas as determinações empíricas do tempo estejam
submetidas às regras da determinação geral do tempo, e que as analogias da experiência , de
que vamos ocupar-nos, estejam também no mesmo caso. Estes princípios oferecem a
particularidade de não se ocuparem de fenômenos nem da síntese de sua intenção empírica,
mas tão-somente de sua existência e de sua relação entre si com relação a essa existência.
Mas a maneira de como algo é apreendido no fenômeno, pode determinar-se “a priori” de tal
sorte que a regra de sua síntese possa subministrar esta intuição “a priori” em cada caso
empírico dado; quer dizer, realizá-la por meio destas mesmas sínteses.
A existência dos fenômenos, porém, não pode ser conhecida “a priori”, e ainda que
avancemos por esse caminho a dizer algo sobre alguma existência, nós não a conheceríamos
de uma maneira determinada, quer dizer, que não poderíamos antecipar que sua intuição
empírica não se distingue de outra qualquer. Os dois princípios precedentes, que denominei
matemáticos, porque nos autorizam a aplicação das matemáticas aos fenômenos, referiam-se
a fenômenos sob o aspecto de sua simples possibilidade e nos ensinavam como esses
fenômenos podem ser produzidos conforme as regras de uma síntese matemática, não só
quanto à sua intuição como quanto ao real em sua percepção. Por essa razão podem
empregar-se em um e outro caso as quantidades numéricas, e com elas, conseguintemente,
determinar o fenômeno como quantidade. Assim, por exemplo, eu posso determinar “a
priori” e construir o grau de sensação da luz solar acrescentando aproximadamente 200.000
vezes a da Lua.
Podemos, pois, designar esses princípios com o nome de constitutivos. Bem diferente
há de ser com os princípios que submeter a existência dos fenômenos a regras “a priori”.
Porque, como esta não pode constituir-se, resulta que esses princípios não alcançam mais que
uma relação de existência, e só podem ser princípios reguladores. Não se pode, pois, buscar
aqui nem axiomas nem antecipações; trata-se, unicamente, de saber-se quando uma
percepção nos é dada em uma relação de tempo com outra (ainda que indeterminada), na qual
é essa outra percepção e qual a sua quantidade, senão como está enlaçada necessariamente
com a primeira, quanto à existência nesse modo do tempo.
As analogias têm na Filosofia um sentido muito diferente daquele que oferecem na
Matemática. Nesta, são fórmulas que exprimem a igualdade de duas relações de quantidade e
são sempre constitutivas, e de tal modo que, quando dois membros da proposição estão
dados, por si mesmo se dá o terceiro; quer dizer, constrói-se.
Na Filosofia, pelo contrário, a analogia não é a igualdade de duas relações de
quantidade, mas de duas relações de qualidade, pelo que, dados três membros, não posso
conhecer e determinar “a priori” mais do que sua relação com um quarto; mas não esse
mesmo quarto membro. Tenho somente uma regra para buscá-lo na experiência e um signo
para o encontrar.
A analogia da experiência não é, pois, mais do que uma regra segundo a qual a unidade
da experiência (não a percepção mesma como intuição empírica em geral) deve resultar de
percepções e se aplica aos objetos (fenômenos) simplesmente como princípio constitutivo.
Assim sucede com os postulados do pensamento empírico em geral, que se referem ao
mesmo tempo à síntese da simples intuição (da forma de fenômeno), à da percepção (da
matéria do fenômeno) e à da experiência (da relação dessas percepçôes).
Não têm outro valor que o de princípios reguladores, e se distinguem dos princípios
matemáticos, que são constitutivos, não precisamente pela certeza, que é solidamente
estabelecida “a priori” nuns e noutro, mas pela natureza da evidência, quer dizer, pelo seu
lado intuitivo (e, por conseguinte, também, pela demonstração).
Mas o que se tem advertido em todos os prin cípios sintéticos, e que aqui deve -se agora
denotar particularmente, é que essas analogias têm seu valor e significação como princípios
do uso empírico do entendimento e não como o uso transcendental, e que por conseguinte só
sob esse titulo podem ser demonstrados. Por conseqüência, os fe nômenos não podem
subsumar-se às categorias, mas aos esquemas somente. Porque, se os objetos a que devem
referir-se esses princípios fossem coisas em si, seria absolutamente impossível ter deles “a
priori” algum conhecimento sintético. Mas não são senão fenômenos, e a experiência
possível, o conhecimento perfeito desses fenômenos, na qual terminam definitivamente todos
os princípios “a priori”.
Estes princípios não podem, pois, ter por objeto senão as condições da unidade do
conhecimento empírico na síntese dos fenômenos. Entrementes, esta unidade só se concebe
no esquema do conceito puro do entendimento, posto que, como síntese em geral, acha na
categoria uma função que não limita nenhuma condição sensível.
Estamos, assim, autorizados por estes princípios a compor os fenômenos só na analogia
com a unidade lógica e geral dos conceitos; e, por conse guinte, se no princípio mesmo nos
servimos da categoria, na execução (aplicação dos fenômenos) substituiremos o princípio
com o esquema da categoria, como sendo a chave de seu uso; ou, me lhor ainda, colocaremos
a seu lado esse esquema como condição restritiva, com o nome de fórmula do princípio.
PRIMEIRA ANALOGIA
Princípio da Permanência da Substância
A substância é permanente em todas as mudanças dos fenômenos e sua quantidade
nem aumenta nem diminui na natureza
PROVA
Todos os fenômenos estão no tempo, e só nele podem ser representadas a
simultaneidade e a sucessão como substratum (ou forma permanente da intuição interna). O
tempo, pois, onde deve ser pensada toda mudança de fenômenos, permanece e não muda; e a
sucessão ou a simultaneidade não podem ser representadas senão nele e com suas
determinações. Ora, o tempo não pode ser percebido em si mesmo. É, pois, nos objetos da
percepção, quer dizer, dos fenômenos, que cumpre procurar o substratum que representa o
tempo em geral, e onde pode ser percebido na apreensão, por meio da relação dos fenômenos
com ele, toda mudança ou toda sucessão.
Mas o substrato de tudo o que é real, isto é, de tudo que pertence à existência não pode
ser pensado senão como determinação. Por conseguin te, essa qualquer coisa de permanente,
relativamente à qual todas as relações dos fenômenos no tempo são necessariamente
determinadas, é a substância do fenômeno, isto é, aquilo que existe nele de real, e aquilo que
permanece sempre o mesmo, como “substratum” de toda mudança. E como esta substância
não pode mudar em sua existência, sua quantidade na natureza não pode nem aumentar nem
diminuir.
Nossa apreensão dos elementos diversos do fenômeno é sempre sucessiva, e, por
conseguinte, sempre mutável. É, pois, impossível que possamos jamais determinar por meio
deste único meio se esta diversidade, como objeto da experiência, é simultânea ou sucessiva,
a menos que não tenha por fundamento algo que sempre esteja, algo durável, permanente, de
que toda mudança e toda simultaneidade não sejam mais que outros tantos modos de ser
(“modi”). Por conseguinte, só no permanente são possíveis as relações do tempo (porque a
simultaneidade e a sucessão são meras relações de tempo); quer dizer, que o permanente, para
a representação empírica do tempo mesmo, e o “substratum” que torna só possível toda
determinação do tempo.
A permanência expressa em geral, o tempo como o correlativo constante de toda
existência de fenômenos, de toda mudança e de toda simulta neidade. Com efeito, a mudança
não se refere ao tempo em si, mas só aos fenômenos no tempo, da mesma maneira que a
simultaneidade não é um modo do tempo mesmo, no qual não existem partes simultâneas
mas só sucessivas.
Se se atribuísse ao tempo uma sucessão, seria preciso conceber de novo outro tempo,
em que fosse possível essa sucessão. Só pelo permanente recebe a existência, nas diferentes
partes da série sucessiva do tempo, uma quantidade que se denomina duração. Por que na
simples sucessão, a existência aparece e desaparece sem cessar, não tendo nunca a menor
quantidade. Mas, como o tempo não pode ser percebido em si mesmo, segue -se que esse
permanente nos fenômenos é o substratum” de toda determinação do tempo, e também, por
conseguinte, a condição da possibilidade de toda unidade sintética das percepções, quer dizer,
da experiência. E toda existência, toda mudança no tempo, não deve considerar-se mais do
que um modo do que dura e não muda.
O permanente, pois, nos fenômenos é o objeto mesmo, quer dizer, a substância
(“phaenome non”); mas o que muda ou pode mudar é só o modo de existência desta
substância, ou melhor dito, suas determinações. Eu vejo que em todo tempo, não só os
filósofos, como também o vulgo, consideram esta permanência como um “substratum” de
toda mudança de fenômenos e seguirão sempre supondo-o como coisa indubitável.
O que fazem os filósofos é expressá-lo com um pouco mais de precisão, ao dizerem:
em meio a todas as mudanças que ocorrem no Mundo, a substância permanece; só o acidente
muda. Mas não acho em parte alguma a menor tentativa de demonstrar esta proposição
sintética, e até só raramente a vejo figurar em seu lugar, nas obras, à frente dessas leis puras e
inteiramente “a priori” da Natureza. Na verdade, dizer que a substância é permanente, é uma
expressão tautológica. Porque esta permanência é a única razão pela qual aplicamos aos
fenômenos a categoria de substância, e seria mister provar que em todos os fenômenos existe
algo permanente, cuja existência é determinada pelo mutável.
Tal prova, porém, não pode ser fornecida dogmaticamente, quer dizer, por meio de
conceitos, pois ela se refere à proposição sintética “a priori" e como ninguém pensou jamais
que seme lhantes proposições não têm valor senão em rela ção com a experiência possível, e
por conseguinte não podem ser provadas senão por meio de uma dedução da possibilidade da
experiência, não tem nada de particular que, ainda colocando esta proposição sintética como
fundamento de toda experiência (por que é indispensável no conhecimento empírico), nunca
tenha sido demonstrada.
Perguntou-se a um filósofo qual era o peso do fumo, ele respondeu: “Tirai do peso da
Lenha queimada o da cinza e tereis o peso do fumo.” Ele supunha, pois, como coisa inegável,
que a matéria (a substância) nem mesmo no fogo perdia nada, e que só a sua forma mudava.
Também a proposição nada não sai do nada, não é senão outra consequência do princípio da
permanência, ou melhor dito, da existência sempre subsistente do sujeito próprio dos
fenômenos. Porque, se o que se denomina substância no fenômeno há de ser propria mente o
“substratum” de toda determinação de tempo, é necessário que toda existência, tanto passada
como futura, esteja única e exclusivamente determinada nele.
Damos, pois, a um fenômeno o nome de substância, porque supomos sua existência em
todo tempo, e isto não exprime bem o termo permanência, que mais parece referir-se ao
futuro.
Todavia, como a necessidade interna, de ser permanente, é inseparável de tê -lo sido
sempre pode seguir-se conservando essa expressão. Gigni de nihilo nihil, in nihilum nil posse
reverti, eram duas proposições que os antigos uniam intimamente e que hoje indevidamente
se separam algumas vezes, supondo que se aplicam a coisas em si, e que a primeira é
contrária à idéia de que o Mundo depende de uma causa suprema (ainda que quanto à sua
substância). Mas esse tema é in fundado, porque aqui só se trata de fenômenos no campo da
experiência, cuja unidade nunca seria possível se admitíssemos que ocorrem coisas novas
(quanto à substância). Neste caso, com efeito, desapareceria o que só pode representar a
unidade do tempo, quer dizer, a identidade do “substra tum”, no qual unicamente acha toda
mudança a sua completa unidade. Esta permanência, não obstante, não é mais do que a
maneira de como nos re presentamos a existência das coisas (no fenômeno).
As determinações de uma substância, as que são modos de sua existência, chamam-se
acidentes. Sempre são elas reais, porque concernem também à existência da substância (as
negações só são determinações que exprimem a não existência de alguma coisa na
substância). Quando se atribui uma existência particular a essas determinações reais na
substância (p. ex., ao movimento considerado como um acidente da matéria), chama -se então
a essas existências inerência , para distingui-la da substância que se denomina subsistência.
Como disto resultam muitas confusões errôneas, se falaria com maior exatidão e precisão,
designando unicamente por acidente a maneira como a existência de uma substância foi
positivamente determinada.
Em vista, todavia, das condições a que está sujeito o uso lógico de nosso entendimento,
é impossível isolar, em certo modo, o que pode mudar na existência de uma substância,
enquanto que a substância permanece e de considerá-lo em sua relação com o que é
propriamente permanente e radical. Por isto se encontra esta categoria sob o titulo de
relações; mais como condição dessas rela ções do que como contendo em si uma relação.
Nesta permanência se funda também a legitimidade do conceito de mudança. O nascimento e
a morte não são mudanças do que nasce e morre. A mudança é um modo de existência que
sucede a outro modo de existência do mesmo objeto. Tudo o que muda é, pois, permanente, e
só o seu estado é que varia. E como esta mudança não é mais que das determinações que
podem acabar ou começar, pode dizer-se, ainda que pareça paradoxo, que só o permanente (a
substância) muda, e que o mutável não sofre alteração alguma, mas só uma vicissitude, posto
que certas determinações cessam e outras começam.
A mudança, pois, não pode ser percebida senão nas substâncias, e não há percepção
possível do nascer e do morrer, senão enquanto são simples determinações do permanente,
porque precisamente é esse permanente que possibilita a representação da passagem de um
estado a outro, e do não ser ao ser, e empiricamente só podem conhecer-se como
determinações mutáveis do que é permanente.
Para supor que uma coisa começa a ser absoluta, é necessário admitir um momento em
que não existia. Mas, em que ligar esse momento, senão com o que já existiu? Porque um
tempo va zio anterior não pode ser objeto de percepção. Mas, se se enlaça esse nascimento
com coisas que já antes existiram e que permaneceram até este instante, este nascimento não
foi mais do que uma modificação do que já existia, quer dizer, do permanente. E assim
mesmo com o perecimento de uma coisa: isto pressupõe a representação empírica de um
tempo onde um fenômeno cessa de ser.
As substâncias (nos fenômenos) são os “substratuns” de todas as determinações de
tempo. O nascimento de uns e o término de outros suprimiriam até a única condição da
unidade empírica do tempo, e os fenômenos se relacionariam, então, como duas classes de
tempo cuja existência correria simultaneamente, o que é um absurdo.
Porque não existe mais que um tempo em que todos os demais tempos não estão
simultaneamente, mas necessariamente. A permanência é, pois, uma condição necessária,
pela qual unicamente podem determinar-se os fenômenos como coisas ou objetos em uma
experiência possível. Mas no que segue buscaremos qual o critério empírico desta
permanência necessária, e também qual o da substanciabilidade dos fenômenos.
SEGUNDA ANALOGIA
Princípio da Sucessão no Tempo, Segundo a Lei da Causalidade
Todas as mudanças acontecem conforme a lei do enlace de causas e efeitos
PROVA
(O princípio precedente demonstrou que todos os fenômenos da sucessão no tempo não
são mais do que mudanças, quer dizer, uma existência e não existências sucessivas de
determinações da substância permanente, e que, por consequência, não é admissível que uma
existência da mesma substância siga a sua não existência ou uma não existência a sua
existência; ou, por outros termos, um começo ou um fim da substância mesma. Poderia
formular-se este princípio dizendo: toda sucessão de fenômenos não é mais do que mudança;
porque o começo ou fim da substância não são mudanças dessa substância, posto que o
conceito de mudança supõe o mesmo sujeito existente com duas determinações opostas, por
conseguinte, permanente. Feita esta advertência, passemos a prova.)
Observo, eu, que os fenômenos se sucedem uns aos outros, quer dizer, que certo estado
de coisas se dá em um momento, enquanto que o contrário existia no estado interior. Eu
reúno, pois, propriamente falando, duas percepções no tempo. Mas esta ligação não é obra só
do sentido nem da intuição, mas produto de uma faculdade sintética da imaginação que
determina o sentido interno re lativamente às relações de tempo.
É esta faculdade que une entre si os dois esta dos, de ta l sorte que um ou outro precedeu
no tempo, porque o tempo em si não pode ser percebido, e só por relação com ele se pode
determinar no objeto o que precede e o que segue, e isto empiricamente. Tenho, pois,
consciência somente de que minha imaginação põe a um antes e a outro depois, e não de que
no objeto um estado precede ao outro. Em outros termos, a simples percepção deixa sem
determinar a relação objetiva dos fe nômenos que se sucedem.
Para que isto possa ser conhecido de um modo determinado, é mister que a relação
entre os dois estados seja de tal sorte concebida que a ordem na qual devem ser postas se
encontre determinada como necessária, esteja antes, o outro depois, e não inversamente. Mas
o conceito que porta consigo a necessidade da unidade sintética não pode ser senão um
conceito puro do entendimento, o qual não pode encontrar-se na percepção. Esse conceito é
aqui de relação, de causa e efeito, isto é, de uma relação cujo primeiro termo determina ao
segundo como sua conseqüência, e não tão-só como algo que poderia preceder na imaginação
(ou não ser percebido de nenhuma maneira).
Só, pois, porque submetemos a sucessão de fenômenos, por conseguinte, toda mudança
à lei de causalidade, é possível a experiência mesma, quer dizer, o conhecimetno empíric o de
seus fenômenos. Por conseqüência, só em virtude desta lei são estes possíveis como objetos
da experiência.
A apreensão da diversidade do fenômeno é sempre sucessiva. As representações dos
fatos se sucedem umas a outras. Enquanto a saber se também nos objetos se sucedem, é este
já um segundo ponto de exame que não está contido no primeiro. Em verdade, pode-se muito
bem denominar objeto a toda coisa e até a toda representa ção, de que tenhamos consciência;
mas se se pergunta que significa esta palavra em relação aos fenômenos, considerados não
como objetos (representações) mas como somente designando um objeto, questão é já esta de
maior profundidade. Enquanto são simplesmente como representações, objetos de
consciência, não se distingue da apreensão, quer dizer, do ato que consiste em admiti-las na
síntese da imaginação, e, por conseguinte, pode dizer-se que o que há de diverso nos fenôme -
nos foi sempre produzido no espírito.
Se os fenômenos fossem coisas em si, nin guém poderia explicar, pela sucessão das
representações do que têm de diverso como esta diversidade está enlaçada no objeto. Porque
nós outros só temos que ver com as nossas representações; e está fora por completo da esfera
de nossos conhe cimentos o saber o que podem ser as coisas em si (independentemente
consideradas das representações com que nos afetam). Mas, ainda que os fe nômenos não
sejam coisa em si e sejam, não obstante, a única coisa de que possamos ter conhecimento,
devo, todavia, mostrar a ligação que convém no tempo à diversidade dos fenômenos mesmos,
ainda quanto a representação desta diversidade seja sempre sucessiva na apreensão.
Assim, por exemplo, a apreensão do que há de diverso no fenômeno de uma coisa,
posta diante de mim, é sucessiva. Mas, se se pergunta se as diversas partes dessa coisa são
também sucessivas em si, ninguém seguramente responderá que sim. Mas, elevando meus
conceitos, de um objeto até um ponto de vista transcendental, vejo que a coisa não é um
objeto em si, mas só um fenômeno, quer dizer, uma representação, cujo objeto transcendental
é desconhecido; que é, pois, então, o que eu entendo por esta questão, a saber, como o que há
de diverso no fenômeno mesmo (que, sem embargo, não é nada em si) pode ser ligado? Aqui
se considera o que se acha na apreensão sucessiva como representação; mas o fenômeno que
me é dado, ainda que seja só um conjunto de representações, considera-se como objeto dessas
mesmas representações, como um objeto com o qual deve concordar o conceito que tirei das
representações da apreensão.
Imediatamente se adverte que, como a concordância do conhecimento com o objeto é a
verdade, não se pode buscar aqui senão as condições formais da verdade empírica, e que o
fenômeno por oposição às representações da apreensão, só pode ser representado como
objeto distinto dessas representações, enquanto que a apreensão está sujeita a uma regra que a
distingue de toda outra, e que torna necessária uma espécie de ligação, de síntese, de sua
diversidade. O objeto é quem contém no fenômeno a condição desta regra necessária da
apreensão.
Dirijamo-nos agora ao nosso próprio assunto. Que uma coisa suceda, quer dizer, que
uma coisa ou um estado, que antes não existiam, atualmente existam, não se poderia perceber
empiricamente, se precedentemente não houvesse um fenômeno que contivesse esse estado;
porque, uma realidade que sucede a um tempo vazio, por conseguinte, um começo que não
precede a um estado de coisas, não pode para nós outros ser melhor apreendido que o tempo
mesmo vazio.
Toda apreensão de um evento é, pois, uma percepção que sucede a outra. Mas como em
toda síntese da apreensão se dá o que antes fiz ver com a apreensão de uma coisa, por isso
não se distin gue ainda das outras. Além disso, notarei também que, se em um fenômeno
contendo um acontecimento, denomino A ao estado anterior da percepção, e B ao seguinte,
B, não pode seguir A na apreensão, e, na percepção, A não pode seguir B, mas somente
precedê-la. Vejo, por exemplo, um navio descer o curso de um rio. Minha percepção do lugar
que ocupo mais abaixo segue ou sucede a do que mais acima tinha, e é assim mesmo
impossível que na apreensão desse fenômeno possa ser percebido o barco primeiro mais
abaixo e depois mais acima. A ordem sucessiva das percepções na apreensão está, pois, a qui
determinada e dele mesmo é que depende.
No exemplo precedente da apreensão de uma casa, podem minhas percepções começar
pelo teto da casa e concluir pelos alicerces, ou começar por baixo e acabar por cima, e podia
também começar a apreender pela direita ou pela esquerda os ele mentos diversos da intuição
empírica. Na série dessas percepções, não havia, pois, uma ordem de terminada que forçasse a
começar por este ou outro ponto para unir empiricamente os elementos diversos de minha
apreensão.
Por esta regra deve sempre achar-se na percepção do que acontece e tomar necessária a
ordem das percepçôes sucessivas (na apreensão desse fenômeno). Derivarei, pois, no caso
que nos ocupa, a sucessão subjetiva da apreensão, da sucessão objetiva dos fenômenos, pos to
que a primeira sem a segunda estaria absolutamente inde terminada e não distinguiria um
fenômeno de outro. Ela, por si só, nada nos prova no tocante à ligação do diverso no objeto,
porque é completamente arbitrária.
A segunda consistirá, pois, na ordem da diversidade do fenômeno, na qual a apreensão
de um (que acontece) segue, segundo uma regra, à de outro (que precede). Somente assim é
que posso dizer do fenômeno mesmo, e não somente de minha apreensão, que existe neles
sucessão; o que significa que não posso estabelecer a apreensão senão nesta sucessão.
Segundo este princípio, é, pois, no que precede em geral a um evento que se acha a
condição da regra pela qual este evento continua sempre e sucessivamente; mas eu não posso
inverter a ordem partindo do evento e determinar (pela apreensão) o que precede. Porque
nenhum fenômeno volve do momento seguinte ao que o precede (por mais que todo
fenômeno se refira sempre a algum momento anterior) mas ao contrário, a um tempo dado,
segue sucessivamente outro tempo determinado. E, posto que existe algo que segue, é de todo
ponto necessário que eu o refira a algo que preceda e a quem siga, segundo uma regra, quer
dizer, necessariamente; de tal sorte que o evento, como condicionado, nos conduz
seguramente a uma condição que o determina.
Suponhamos que um evento não esteja precedido de nada, e que deva seguir segundo
uma regra; toda sucessão, então, na percepção, não exis tiria senão na apreensão, quer dizer,
que o que propriamente precederia e que o que seguiria nas percepções seria só como
condicionado, nos conduz seguramente a um modo objetivamente.
Desta sorte, só teríamos um jogo de representações, que não se refeririam a nenhum
objeto, quer dizer, que, por nossa percepção, um fenômeno em nada seria distinto de outro,
sob a rela ção de tempo, porque a sucessão no ato de apreensão é sempre idêntica, e por
conseguinte não há nada no fenômeno que a determine de tal maneira que torne necessária
determinada sucessão. Não direi, pois, então, que dois estados se seguem no fenômeno, mas
somente que uma apreensão segue a outra, o que é puramente subjetivo e não determina
nenhum objeto, e não pode por conseguinte equivaler ao conhecimento de um objeto (nem
ainda no fenômeno).
Quando vemos que algo sucede, sempre supomos que alguma outra coisa a precedeu, a
que segundo uma regra seguiu. De outro modo eu não poderia dizer do objeto que segue,
posto que a simples sucessão em minha apreensão, se não está determinada por uma regra,
representa a algo que precedeu, não prova uma sucessão no objeto.
É pois, sempre relativamente a uma regra segundo a qual são os fenômenos
determinados em sua sucessão, quer dizer, tal como se dão, pelo estado precedente, que dou à
minha síntese subje tiva (da apreensão) um valor objetivo; e só sob esta suposição é possível a
mesma experiência de algo que sucede. Isto certamente parece contradizer todas as
observações que sempre se fizeram sobre a marcha do nosso entendimento. Segundo aquelas
observações, só pela percepção e compa ração de muitos eventos que se verificam sucessivamente de um modo uniforme, com fenômenos antecedentes, nos permite descobrir uma
regra, pela qual certos eventos seguem sempre a certos fenômenos e de fazer-nos formar o
conceito de causa.
Nesse sentido, esse conceito seria puramente empírico e a regra que dá, a saber, que
tudo que sucede tem uma causa, seria tão contingente como a própria experiência; sua
universalidade e sua necessidade seriam, pois, meramente fictícias, sem nenhum verdadeiro
valor, porque não se fundam “a priori”, mas na ilusão. Dá-se aqui o mesmo que com outras
representações puras “a priori” (p. ex., espaço e tempo) que podemos extrair da experiência
em estado de conceitos claros, porque os colocamos nela nós mesmos e a realizamos por seu
intermédio.
Mas se esta representação de uma regra que determina a série de eventos não pode
obter a cla ridade lógica de um conceito de causa, senão quando a empregamos na
experiência, o conhecimento desta regra, como condição da unidade sintética dos fenômenos
no tempo, é o fundamento da própria experiência e por conseguinte a precede “a priori".
É preciso mostrar, por exemplo, que na expe riência mesma nunca atribuímos ao objeto
a sucessão (que nós representamos em um evento quando algo acontece que antes não existia)
e que a distinguimos de nossa apreensão subjetiva, como se uma regra feita a princípio nos
obrigue a observar esta ordem de percepção de preferência a outra, até o ponto que é
propriamente essa necessidade que possibilita a representação de uma sensação no objeto.
Temos em nós mesmos representações das quais podemos também ter consciência. Mas
por extensa, exata e precisa que essa consciência possa ser, essas não são mais do que
representa ções, quer dizer, determinações interiores de nosso espírito, nesta ou noutra relação
de tempo. Como, pois, é, que as supomos um objeto ou lhes atribuímos, além da realidade
subjetiva que como modificações possuem, não sei que espécie de re alidade objetiva? O valor
objetivo não pode consistir na relação com outra representação (como aquela do que se
atribuiria ao objeto) porque, se não, apresenta -se outra vez a questão de saber como sai esta
representação de si mesma, além do subjetivo que lhe é próprio como determinação do estado
de espírito.
Se encontramos que uma qualidade adita a re lação com um objeto a nossas
representações, e que é a importância que tiram, achamos que só serve para tomar necessário
o enlace das representações em certo sentido e submetê-la a uma regra, e que reciprocamente
adquirem um valor objetivo só por ser necessária certa ordem entre elas sob a relação de
tempo.
Na síntese dos fenômenos, o diverso das representações é sempre sucessivo. Nenhum
objeto se representa com isso; porque por esta sucessão que é comum a todas as apreensões
não se distin gue nada de nada. Mas desde que percebo ou suponho nesta sucessão uma
relação com um estado precedente, de que resulta a representação conforme uma regra, não
me apresento então algo como acontecimento ou como o que sucede; quer dizer, que conheço
um objeto que devo colocar no tempo em certo ponto determinado, o qual, dado o estado
anterior, não pode ser mais do que esse.
Quando percebo, pois, que algo sucede, esta representação implica, primeiro, que algo
há pre cedido, porque precisamente é por relação a este algo anterior que o fenômeno entra no
tempo, quer dizer, que é representado como existindo depois de um tempo anterior no qual
não existia. Mas nesta relação não recebe seu lugar de tempo determinado senão supondo em
um estado quando algo a quem segue sempre, quer dizer, de acordo com uma regra. Donde
resulta um primeiro termo, que não pode inverter a série colocando o que sucede antes do que
precede; e, em segundo lugar, que, dado o estado precedente, o evento determinado tem lugar
necessária e infalivelmente. Segue -se dai que há certa ordem em nossas representações,
segundo o que o presente (como sucedido) indica um estado precedente como correlativo,
ainda que indeterminado, do evento dado, unido a este como a sua conseqüência e
necessariamente ligado na série do tempo.
Se é, pois, uma lei necessária de nossa sensibilidade, e por conseguinte uma condição
formal de todas as percepções, que o tempo que precede determina necessariamente o que
segue (porque não posso chegar a este senão passando por aquele), é por seu turno também
uma lei essencial da repre sentação empírica, da sucessão no tempo, que os fenômenos do
tempo quando determinem todas as existências do tempo que segue e que estas não tenham
lugar como eventos, senão enquanto os primeiros determinam sua existência no tempo, quer
dizer, as fixam, segundo uma regra. Porque não podemos conhecer empiricamente esta continuidade no encadeamento do tempo senão nos fenômenos. Toda experiência supõe o
entendimento, e este constitui sua possibilidade e o primeiro que para isto faz não é achar a
representação de um objeto, senão possibilitar a representação de um objeto em geral.
Não se pode, porém, chegar a isto senão transportando a ordem do tempo aos
fenômenos e a sua existência, quer dizer, dando a cada um, considerado como consequência,
um lugar determinado no tempo, em relação aos fenômenos pre cedentes, lugar sem o qual
não concordaria com o tempo mesmo, o qual determina “a priori” o lugar de todas as suas
partes. Mas estas determinações dos lugares não podem proceder da relação dos fe nômenos
com um tempo absoluto (porque não é um objeto de percepção); é mister, pelo contrário, que
os fenômenos se determinem reciprocamente uns aos outros seus lugares no tempo e os
tomem necessários na ordem do tempo, quer dizer, que o que segue ou sucede deva seguir,
segundo uma lei geral, ao que estava contido no estado precedente.
Daí uma série de fenômenos que por meio do entendimento produz e torna necessários
precisamente a mesma ordem, o mesmo encadeamento contínuo na série de percepções
possíveis, que o que se encontra “a priori” na forma da intuição interna (no tempo), onde
devem ter seu posto todas as percepções.
O evento de algo é, pois, uma percepção que pertence a uma experiência possível e que
é real, desde que percebo o fenômeno como determinado no tempo, quanto ao seu lugar, e
por conseguinte como um objeto que pode sempre ser achado segundo uma regra no
encadeamento das percepções. Mas esta regra, que serve para determinar algo na série do
tempo, consiste em que a condição que faz com que o evento siga sempre (quer dizer, de um
modo necessário) se encontre no que precede. O princípio de razão suficiente é, pois, o
princípio de toda experiência possível, quer dizer, do conhecimento objetivo dos fenômenos,
sob o aspecto de sua relação na sucessão do tempo.
Mas a prova desta proposição está somente nas considerações que seguem. Todo
conhecimento empírico supõe a síntese do diverso operada pela imaginação, o que é sempre
sucessiva, quer dizer, que nela (a imaginação) estão sempre as representações umas depois
das outras. Mas a ordem de sucessão (o que deve preceder e o que deve seguir) não está de
modo algum determinado na imaginação, e a série das representações que se seguem pode
tornar-se a mesma do que segue ao que precede que do que precede ao que segue. Mas se esta
síntese é uma síntese da apreensão (da diversidade de um fenômeno dado), a ordem, então,
está determinada no objeto, ou, para falar mais propriamente, há na síntese sucessiva que
determina um objeto, uma ordem, segundo a qual um algo tem necessariamente que preceder,
e uma vez esse algo posto, outro algo segue-o indispensavelmente. Para que minha percepção
contenha o conhecimento de um evento ou de algo que acontece realmente, é, pois, mister,
que seja um juízo empírico, donde eu conceba que a sucessão está determinada; quer dizer,
que este evento supõe no tempo outro fenômeno, a que segue necessariamente, conforme
uma regra.
De outro modo, se dado o antecedente, o evento não o seguisse necessariamente, serme-ia preciso considerá-lo como um jogo meramente subjetivo de minha imaginação e ter
como um sonho o pudera supor como objetivo. A relação em virtude da qual nos fenômenos
(considerados como percepções possíveis) a existência do que segue (que sucede) está
necessariamente, e segundo uma regra, determinado no tempo por algo que precede; em uma
palavra, a relação de causa e efeito, é a condição do valor objetivo de nossos juízos empíricos
relativamente à série de percepções, por conseguinte, de sua verdade empírica, e portanto da
experiência.
O princípio da relação de causalidade na série de fenômenos tem, pois, também um
valor ante rior a todos os objetos da experiência (sujeitos às condições da sucessão), posto que
ele mesmo é o princípio que possibilita esta experiência.
Mas aqui se oferece uma dificuldade que urge resolver. O princípio da ligação causal
entre os fenômenos está limitado, em nossa fórmula, à sucessão se vê que também se aplica a
sua simultaneidade, e que causa e efeito podem ser ao mesmo tempo. P. ex., faz em um
quarto calor que não existe ao ar livre. Busco a causa e acho uma la reira acesa. Logo, esta
lareira é, como causa, ao mesmo tempo que seu efeito, quer dizer, o calor do quarto; não
existe aqui sucessão no tempo entre a causa e o efeito, pois são simultâneos; e, não obstante,
não deixa por isso de ser menos aplicável a lei. A maior parte das causas eficientes da
Natureza existe ao mesmo tempo que os seus efeitos, e a sucessão destes consiste
unicamente em que a causa não pode produzir todo o seu efeito num instante.
Porém, no instante em que o efeito se produz é sempre coetâneo da causalidade da sua
causa; porque se esta causa tivesse desaparecido instantes antes o efeito não se teria
produzido. É necessário advertirmos que aqui estamos tratando somente da ordem do Tempo
e não do seu curso; a relação, pois, fica, embora não tenha transcorrido tempo nenhum.
O Tempo entre a causalidade da causa e seu efeito imediato pode desaparecer (e por
conseguinte serem ambos simultâneos); mas a relação de um para o outro continua sendo
sempre determinável no Tempo. Se, por exemplo, uma bola posta sob uma almofada fofa
produz uma ligeira depressão, esta bola, considerada como causa, está ao mesmo tempo que
seu efeito. Entretanto, distingo-os um do outro pela relação de Tempo que existe na sua união
dinâmica.
De fato, quando eu ponho a bola sob a almofada, a depressão desta sucede à forma lisa
que tinha na sua superficie, mas se a almofada já tinha outra depressão (causada não importa
por que), então não produz o efeito anteriormente mencio nado.
A sucessão é, pois, absolutamente o único critério empírico do efeito na sua relação
com a causalidade da causa que precede. O copo é a causa da elevação da água sobre sua
superficie horizontal, apesar de ambos os fenômenos se verificarem ao mesmo tempo.
Realmente, quando eu tirar água com um copo de uma vasilha maior, acontece o seguinte: a
mudança da posição horizontal existente na vasilha maio r pela mesma posição que toma
dentro do copo.
Esta causalidade conduz ao conceito de ação, este ao conceito de força e por este ao de
substância. Como não desejo misturar no meu trabalho crítico (que unicamente é dirigido às
fontes do conhecimento sintético “a priori”) a análise de conceitos que apenas tem por
objetivo a sua explicação (e não a sua extensão), deixo o exame deta lhado para um futuro
sistema da Razão pura; por outro lado, esta análise é encontrada em grande parte nas obras
clássicas que tratam dessas matérias. Entretanto, não posso deixar de falar do critério
empírico de uma substância, enquanto que esta se manifesta, não pela permanência do
fenômeno, mas melhor e mais facilmente pela ação.
Onde existe a ação, e por conseguinte a atividade e a força, está também a substância e
ape nas nesta é que devemos buscar o assunto daquela, que são as fontes fecundas dos
fenômenos. Ora, muito bem; mas se for necessário explicar o que se entende por substância e
não cairmos num círculo vicioso, a resposta, agora, já não é tão fácil.
Como deduzirmos imediatamente da ação, a permanência do agente, o que é,
entretanto, um critério essencial próprio da substância (“phaenomenon”)? Porém depois do
que verificamos, a questão nada tem de complicado, embora seja insolúvel, se for apresentada
de maneira comum (o de tratar analiticamente nossos conceitos). A ação indica-nos a relação
do sujeito da causalidade com o efeito.
E como todo efeito é resultante de algo que sucedeu e, por conseguinte, em algo
transformável, que o Tempo caracteriza pela sucessão, o último sujeito deste efeito é, pois, o
permanente, considerado como “substratum” de toda transformação, quer dizer, a substância.
Porque segundo o princípio da causalidade, as ações são sempre o primeiro fundamento
ocasional dos fenômenos, por conseguinte, não podem estes encontrar-se num sujeito que
mude por si mesmo, porque então teríamos que admitir outras ações e outro sujeito que
determinassem essa mudança.
Por este princípio a ação é um critério empírico bastante para provar a substancialidade,
sem ser preciso procurar a permanência do sujeito pela comparação de percepções, o que não
poderia ser feito por este caminho com o cuidado que requerem a grande importância e
absoluta universalidade do conceito.
De fato, que o primeiro sujeito da causalidade do que nasce e morre não pode ele
mesmo nascer nem morrer (no campo dos fenômenos), é essa uma conclusão exata que nos
conduz à necessidade empírica e à permanência na existência e, por conseguinte, a o conceito
de uma substância como fenômeno.
Quando algo sucede, o próprio acontecimento, abstração feita da sua natureza, é por si
mesmo um objeto de investigação. A passagem da não-existência de um estado para o estado
atual, embora este não contenha nenhuma qualidade fenomenal, é por si mesma coisa que se
deve investigar.
Este acontecimento como já foi demonstrado no inciso A, não se refere à substância
(pois esta não nasce), senão ao estado da substância. Não é, pois, mais do que uma simples
mudança e não origem de algo que proceda do nada.
Quando esta origem é considerada como efeito de uma causa estranha, é chamada
criação. Uma criação não pode ser considerada como sucesso porque esta possibilidade
quebraria a unidade da experiência.
Entretanto, considerando todas as coisas, não como fenômenos senão como coisas em
si e como objetos somente do Entendimento, podem então ser estimadas, embora substância,
como dependendo quanto à sua existência, de uma coisa estranha. Mas, tudo isso supõe outra
signific ação nas palavras e não se aplica aos fenômenos como objeto possível da experiência.
Como, então, algo pode mudar e como um estado que ocorre num momento dado pode
aconte cer em outro a outro estado oposto? Não temos disto a melhor noção “a priori”. Para
isto, necessitamos conhecer as forças reais, por exemplo, das forças motrizes, ou o que é o
mesmo, de certos fenômenos menos sucessivos (como movimento) que revelem essas forças,
o que somente empiricamente pode acontecer.
Mas a forma de toda mudança, c ondição sem a qual não pode efetuar-se, como sucesso
resultante de outro estado (seja qual for sua matéria, isto é, seja qual for o estado mudado), e,
por conseguinte, a sucessão dos mesmos estados (a coisa que sucede), pode, entretanto, ser
considerada “a priori” segundo a lei da causalidade e as condições do Tempo. Quando uma
substância passa de um estado “a” a outro “b”, o momento do segundo é diferente do
momento do primeiro e o segue. Mesmo assim, o segundo estado, como realidade (no
fenômeno) é diferente do primeiro, onde esta realidade não existia, como “b” de “zero”, quer
dizer, que se o estado “b” se diferencia do estado “a” apenas pela quantidade, então a
mudança é o acontecimento “b-a”, que não se encontravam no estado precedente e em
relação a o qual esse estado é O.
Trata-se, pois, de ver como é possível que uma coisa possa passar de um estado = “a” a
outro estado = “b”. Entre dois momentos há sempre um Tempo, e entre dois estados nesses
momentos há sempre uma diferença que possui uma quantida de (porque todas as partes dos
fenômenos são, ao mesmo tempo, quantidades). Toda passagem de um estado ao outro, pois,
ocorre sempre num espaço de tempo entre dois momentos, donde o primeiro determina o
estado que a coisa deixou, e o segundo no que ela se transforma.
Assim, ambos são os limites do Tempo de uma mudança e, por conseguinte, de um
estado intermediário entre dois estados, pertencendo como tais à mudança integral. Porém,
toda mudança tem uma origem que revela a sua causalidade durante o tempo em que se
verifica.
Esta causa não produz repentinamente a sua mudança (num instante indivisível) mas,
sim, num Tempo, de tal modo, que assim como o Tempo cresce desde o primeiro instante “a”
até a sua integridade “b”, assim também a quantidade da realidade (“b-a”) se produz por
todos os graus inferiores compreendidos entre o primeiro e o segundo momentos.
Toda mudança é, pois, possível somente por uma ação contínua da causalidade, que,
por ser uniforme, chama -se um momento. A mudança não se compõe desses momentos, se
não que é o resultado do seu efeito. Tal é a lei da continuidade de toda mudança. O princípio
desta lei é o seguinte: “Nem o Tempo nem o fenômeno em Tempo, se compõe de partes que
sejam as menores possíveis”, e, sem embargo, a coisa em sua mudança não chega ao seu
segundo estado senão passando por todas essas fases como por outros tantos elementos. Não
existe ne nhuma diferença no real do fenômeno como na quantidade de tempos que seja a
menor possível.
E o novo estado da realidade passa, saindo do primeiro onde não existia por todos os
graus infinitos desta mesma realidade, entre os quais as diferenças são todas menores que a
que existe entre o "0" e "a".
Não precisamos aqui pesquisar a utilidade que pode prestar este princípio na
investigação da Natureza. Porém, desperta nosso interesse examinar como esse princípio, que
tanto parece dilatar os nossos conhecimentos, seja possível “a priori” por completo, apesar de
verificarmos imediatamente que é real e legítimo, e que, por conseguinte, é desnecessário
explicar como é possível.
Mas como quase sempre precisam de fundamento as pretensões de estender os nossos
conhe cimentos pela Razão pura, convém, como medida, ser nisto muito desconfiado; não
acreditar em nada nem aceitar nada, mesmo com os argumentos dogmáticos mais claros, sem
os documentos que nos proporcionem uma dedução positiva e firme.
Todo aumento do conhecimento, todo progresso da percepção, é apenas uma extensão
da determinação do sentido interno; quer dizer, uma progressão no Tempo sejam quais forem
entretanto os objetivos, fenômenos ou intuições puras. Esta progressão no Tempo determina
tudo e em si permanece indeterminada, isto é, que as partes estão necessariamente no Tempo
e que sondadas pela síntese do Tempo, porém não antes dela.
Por isso, toda passagem da percepção é algo que continua, é uma determinação do
Tempo efetuada pela produção dessa percepção, e como esta determinação é sempre e em
todas as suas partes uma quantidade, representa ele a produção que passa, como quantidade,
com todos os graus em que nenhum deles é o menor, desde zero até o seu grau determinado.
É, pois, evidente que com isso podemos conhecer “a priori” a lei das mutações
enquanto à sua forma. Nós somente antecipamos nossa propria apreensão, cuja condição
essencial deve necessariamente poder ser conhecida “a priori”, posto que reside em nós,
anteriormente a todo fenômeno.
Do mesmo modo que o Tempo contém a condição sensível “a priori” da possibilidade
de uma progressão contínua do que existe ao que deve seguir, da mesma maneira, também, o
Entendimento, por meio da unidade da apercepção, contém a condição “a priori” da
possibilidade da determina ção de todos os instantes dos fenômenos no Tempo, mediante a
série de causas e efeitos, onde as primeiras conduzem necessariamente à existência dos
segundos, dando, assim, valor em cada Tempo (no geral), por conseguinte, objetivamente, o
conhecimento empírico das relações de Tempo.
TERCEIRA ANALOGIA
Princípio da Simultaneidade, Segundo a Lei da Ação e da R elação ou da Reciprocidade
Todas as substâncias, enquanto possam ser percebidas no Espaço, estão numa ação
recíproca geral
PROVA
As coisas são simultâneas quando a intuição empírica da percepção de uma e a da outra
podem seguir reciprocamente (o que não pode acontecer com os fenômenos como
verificamos no segundo princípio). Assim, posso começar pela percepção da Lua e passar à
da Terra, ou, reciprocamente, começar pela da Terra e passar para a da Lua; e, justamente,
porque as percepções desses objetos podem seguir-se reciprocamente, por isso, podemos
dizer que existem simultaneamente.
A simultaneidade é, pois, a existência de coisas diferentes no mesmo Tempo. Porém,
não pode perceber-se o Tempo em si mesmo para deduzir que as coisas estão num mesmo
Tempo e que as percepções possam seguir reciprocamente.
A síntese da imaginação na apreensão indicaria apenas que cada uma dessas
representações está no sujeito quando a outra não está nele e, reciprocamente; porém, não que
os objetos estejam ao mesmo tempo; quer dizer que quando um existe o outro também existe
no mesmo Tempo e que isso é necessário a fim de que possam as percepções seguirem-se
reciprocamente.
É, pois, necessário um conceito intelectual da sucessão recíproca das determinações
destas coisas que existem, simultaneamente, umas fora das outras, para poder dizer que a
sucessão recíproca das percepções tem seu fundamento no objeto e para representar-se
também a simultaneidade como objetiva.
A relação das substâncias, porém, na qual uma contém determinações cuja causa, por
sua vez, se contém na outra, essa relação, repetimos, é a relação de influência, e quando
reciprocamente a segunda contém a causa das determinações da primeira, é quando se
verifica a relação de reciprocidade ou da ação recíproc a.
A simultaneidade das substâncias no Espaço não pode ser conhecida na experiência
senão supondo sua ação recíproca e esta suposição é, ao mesmo tempo, por conseguinte, a
condição da possibilidade das próprias coisas como objetivo da experiência.
As cois as são simultâneas enquanto existem num mesmo e só Tempo. Porém, como
conhecer que estão num mesmo e só Tempo, quando a ordem na síntese da apreensão disto é
indiferente, isto é, quando pode igualmente ir de A a E por B, C, D, que reciprocamente de E
a A ?
De fato, se houvesse sucessão no Tempo (na ordem que começa por A e termina por E),
seria impossível começar por E a apreensão na percepção e retroceder até A, posto que A
pertenceria ao Tempo passado e não poderia, assim, ser um obje tivo de apreensão.
Se admitirmos que numa variedade de substâncias consideradas como fenômeno estiver
cada uma perfeitamente isolada, isto é, que nenhuma aja sobre a outra e receba
reciprocamente a sua influência, diremos então que “a sua simultaneidade” não pode ser
obje to de nenhuma percepção possível e que a existência de uma não poderia le var por meio
nenhum da síntese empírica, à da outra.
De fato, se imaginarmos que estão separadas por um Espaço inteiramente vazio, a
percepção que vai de uma a outra no Tempo, determinaria realmente a existência desta última
por meio de uma percepção ulterior, mas não poderíamos verificar se o fenômeno segue a
primeira objetivamente ou se é simultâneo.
Deve, pois, haver, além da simples existência, algo pelo que A determine a B o seu
lugar no Tempo e, reciprocamente, também, B o seu lugar a A; pois, somente reconhecendo a
substância sob esta condição podem ser representadas empiricamente como “existindo
simultaneamente”. Mas somente aquilo que é a causa de uma coisa, ou das suas
determinações, pode determinar o seu lugar no Tempo.
Por conseguinte, toda substância (posto que não pode ser consequência somente pela
rela ção às suas determinações) deve conter em si a causalidade de certas determinações nas
demais substâncias, e ao mesmo tempo os efeitos da causalidade das outras substâncias, quer
dizer, que todas devem estar imediata ou mediatamente em comunidade dinâmica para que
seja possível conhecer na experiência a simultaneidade.
Porém, tudo isso, sem o que a própria experiência dos objetos em estudo seria
impossível, é necessário, entretanto, para estes mesmos objetivos. É, pois, mister a todas as
substâncias, quando consideradas como fenômenos, enquanto que foram simultâneas, estarem
em comunidade “Gemeinschaft” geral de ação recíproca.
Em alemão, a palavra “gemeinschaft” tem dupla significação e tanto equivale a
“communio” (comunidade) em latim, que a “commercium” (comércio). Nós a empregamos
aqui como desig nando uma comunidade dinâmica, sem a qual a comunidade local
“communio spatii”, em si, não poderia ser reconhecida empiricamente.
É fácil notar em nossas experiências que as influências continuas em todas as partes do
Espaço podem por si conduzir nosso sentido de um objetivo a outro; que a luz que brilha em
nossos olhos e nos corpos celestes produz um comércio mediato entre nós e esses corpos, o
que demonstra assim a sua simultaneidade que não podemos mudar empiricamente de Lugar
(perceber essas mudanças), sem que de todas as formas da matéria nos torne possível a
percepção dos lugares que ocupamos e que é exclusivamente por meio da sua influência
recíproca que se pode comprovar sua simultaneidade, e, daí (embora só mediatamente), a
coexistência dos objetos desde os mais distantes até os mais próximos.
Sem comunidade, toda percepção (do fenômeno no Espaço) está isolada das outras e a
corrente de representações empíricas, isto é, a expe riência, começaria novamente em cada
objeto sem que a precedente estivesse relacionada no mais mínimo ou pudesse estar com ela
numa relação de Tempo.
Não cogito com isso refutar a idéia de um Espaço vazio; porque pode sempre estar ali
onde não há percepções e onde, portanto, não existe o conhecimento empírico da
simultaneidade; porém, neste caso, não poderia ser um objeto para nossa possível
experiência.
Acrescento o que segue para maior clareza.
Todos os fenômenos, enquanto estão contidos numa experiência possível, estão em
espírito na comunidade (“communio”) de apercepção; e para que os objetos possam ser
representados como entrosados, necessário será que determinem reciprocamente os seus
lugares no Tempo e que formem assim um todo. Mas para que esta comunidade subjetiva
possa basear-se num princípio objetivo ou ser relacionada com fenômenos como substâncias,
é preciso que a percepção de um, como prin cípio, possibilite a do outro, e reciprocamente, a
fim de que a sucessão, que está sempre nas percepções, como apreensões, não seja atribuida
aos objetos, senão que possam estes representar como coexistentes.
Mas isto é uma influência recíproca, quer dizer, um comércio real de substâncias, sem o
qual a relação empírica da simultaneidade não poderia ser encontrada. Por meio deste
comércio, os fenômenos, embora externos uns aos outros, e assim mesmo entrosados,
formam um composto “compositum reale”, do qual podem existir numerosas espécies. As
três relações dinâmicas de que resultam todas as demais são, pois, de influência, de
consequência e de composição.
* * *
Tais são as três analogias da experiência. São apenas princípios que servem para
determinar a existência dos fenômenos no Tempo, segundo seus três “modos”, isto é,
segundo a relação com o Tempo mesmo, como quantidade (quantidade, existência ou
duração), segundo a relação no Tempo como série (sucessão), e segundo o Tempo como
conjunto de todas as existências (simulta neidade).
Esta unidade da determinação do Tempo é completamente dinâmica; isto é, que o
Tempo não pode ser considerado como aquilo em que a experiência determina imediatamente
a cada instante seu lugar, o que é impossível porque no Tempo absoluto não é um objeto de
percepção onde os fenômenos se pudessem unir entre si; porém, a regra do Entendimento,
única que pode dar à existência dos fenômenos uma unidade sintética fundada nas relações de
Tempo, determina a cada um deles o seu lugar no Tempo, e, por conseguinte, a determina “a
priori” e com valor para todos os Tempos e para cada Tempo.
Entendemos por Natureza (no sentido empírico) o encadeamento de fenômenos
entrosados no que diz respeito à sua existência, por regras ne cessárias, isto é, por leis. São,
pois, certas leis e leis “a priori” que antes de tudo possibilitam uma Natureza; as leis
empíricas não podem ocorrer nem serem descobertas a não ser por meio da experiência, mas
de conformidade com essas leis primitivas, sem as quais a experiência seria em si impossível.
Nossas analogias apresentam, pois, propria mente a unidade da Natureza no seu
entrosamento de todos os fenômenos sob certos “expoentes”, que somente exprimem a
relação do Tempo (enquanto abarcar toda a existência) com a unidade da apercepção, unidade
esta que somente pode existir numa síntese baseada em regras.
Assim, as três possuem esta significação: todos os fenômenos residem numa Natureza,
e assim deve ser, porque sem esta unidade “a priori”, toda a unidade da experiência, por
conseguinte, toda determinação de objetivos na experiência seriam impossíveis.
Mas, devemos fazer uma advertência a respeito da prova que demos dessas leis
transcendentais da Natureza e sob o caráter particular desta prova tendo também esta
observação extraordinária importância ao mesmo tempo, como regra para qualquer outro
intento de provar “a priori” proposições intelectuais que são ao mesmo tempo sintéticas.
Se quiséssemos demonstrar dogmaticamente, isto é, por conceitos, essas analogias,
como seja: que tudo quanto existe somente se encontra em algo permanente e que todo
acontecimento supõe algo num estado precedente, a quem segue uma regra, e, finalmente,
que na diversidade das coisas simultâneas os estados estão simultaneamente relacionados uns
com os outros, segundo uma regra (em comércio recíproco), então nosso labor teria sido um
trabalho perdido. Porque não podemos ir de um objetivo e da sua existência à existência de
outro ou à sua maneira de existir, por simples conceitos dessas coisas seja qual for o modo
pelo qual forem analisados, O que nos restaria depois?
A possibilidade da experiência, como conhecimento no qual em último termo podem
ser-nos dados todos os objetivos, tem na sua representação para nós uma realidade objetiva.
Porém, nesta situação intermediária, cuja forma essencial consiste na “unidade” sintética da
apercepção de todos os fenômenos, achamos condições “a priori” da determinação
cronológica, necessária e perma nente de toda existência no fenômeno, sem as quais a
determinação empírica é em si impossível, tendo desta forma descoberto as regras da unidade
sintética “a priori”, por meio das quais podemos antecipar a experiência.
Na falta deste método e na falsa persuasão das proposições sintéticas que o uso
experimental do Entendimento recomendava como princípios, sucedeu que sempre foi
procurada, embora em vão, uma prova do princípio, da razão suficiente. Ninguém pensou nas
outras duas analogias, embora se servissem sempre delas sem notá-lo. E, porque não
pensaram nisto, aconteceu que lhes faltava o fio condutor das categorias, aquele que pode
descobrir e tomar sensíveis todas as lacunas do Entendimento, quer nos conceitos, quer nos
princípios.
IV — Postulados do Pensamento Empírico em Geral
1.° — Aquilo que condiz com as condições formais da experiência (com referência à
intuição e aos conceitos) é “possível”.
2.° — Aquilo que condiz com as condições materiais da experiência (da sensação) é
“real”.
3.° — Aquilo que, na conformidade com o real, está determinado segundo as condições
gerais da experiência, é “necessário” (existe necessaria mente).
Explicação
As categorias da modalidade têm de particular que não aumentam em nada, como
determinação do objetivo, o conceito a que se unem como predicado senão que apenas
exprimem a relação com a faculdade de conhecer.
Quando o conceito de uma coisa é já perfeito, posso ainda perguntar se esta coisa é
simplesmente possível ou se é real, e, neste último caso, se além disso é também necessária.
Não pensamos com isso nenhuma determinação com refe rência ao próprio objeto, pois
somente tratamos de saber qual é a relação deste objeto (e de todas as suas determinações)
com o Entendimento e o seu uso empírico, com o juízo empírico e com a razão (na sua
aplicação à experiência).
Precisamente, por este motivo, os princípios da modalidade são apenas explicações da
possibilidade, da realidade e da necessidade em seu uso empírico, e, ao mesmo tempo, a
restrição das categorias somente ao uso empírico, sem permiti-las nem admiti-las pelo uso
transcencental.
Realmente, se possuem apenas um valor lógico e limitam-se a exprimir analiticamente
a forma do “pensamento”, senão que se referem a “coisas" a sua possibilidade, realidade ou
necessidade, é mister que se apliquem à experiência possível é à sua unidade sintética, na
qual somente entram os objetivos do conhecimento.
O postulado da possibilidade das coisas exige que o seu conceito esteja de acordo com
as condições formais da experiência em geral; mas esta, isto é, a forma objetiva da
experiência em geral, contém toda a síntese desejada para o conhecimento de objetivos.
Um conceito que encerrar uma síntese deve ser considerado vazio e é como se não
referindo a nenhum objetivo, se esta síntese não pertencer à experiência, quer extraída dela, e
neste caso seu conceito se denomina conceito empírico, quer como condição “a priori" da
experiência em geral (como sua forma), quando então é um conceito puro, o qual pertence à
experiência, porque somente nesta pode ser encontrado o seu objetivo.
De fato, de onde tirar o caráter da possibilidade de um objetivo idealizado por um
conceito sintético “a priori”, senão da síntese que constitui a forma do conhecimento
empírico dos objetivos?
É também uma condição lógica absolutamente necessária que nesse conceito não deve
existir nenhuma contradição. Porém, isto está muito longe de ser o bastante para constituir a
realidade obje tiva do conceito, quer dizer, a possibilidade de um objetivo tal como é
idealizado pelo conceito.
Deste modo, não existe contradição alguma no conceito de uma figura contida entre
duas linhas retas, porque o conceito de duas linhas retas e do seu encontro não contém a
negação de nenhuma figura. A impossibilidade não está, pois, no próprio conceito, senão na
sua construção no Espaço, isto é, nas condições do Espaço e de suas determinações,
condições estas que, por sua vez, têm realidade objetiva, quer dizer, relacionam-se com
coisas possíveis, posto que contêm “a priori” a forma da experiência em ge ral.
Apresentemos, agora, toda a utilidade e toda a influência desse postulado da
possibilidade. Quando eu represento uma coisa que é permanente, de maneira que quando há
nela uma transformação pertence, somente, ao seu estado, não posso apenas por esse conceito
conhecer se essa coisa é possível.
Igualmente, quando imagino alguma coisa que é de tal natureza, que uma vez colocada
nalgum lugar, outra segue -a imediatamente, posso considerá-la sem contradição, mas não
poderia por isso julgar se uma propriedade dessa espécie (como causalidade) se encontra em
algum objeto possível.
Finalmente, posso imaginar coisas (substâncias) diversas, de tal maneira constituídas,
que o estado de uma produza uma conseqüência no de outra, e reciprocamente; porém,
segundo essas conclusões que apenas se baseiam numa síntese arbitrária, não posso deduzir
se uma relação dessa espécie pode pertencer também às coisas. Somente enquanto esses
conceitos exprimem "a priori” as relações das percepções em cada experiência é como se
conhecêssemos a sua realidade objetiva, isto é, a sua verdade transcendental, e isto, em
verdade, independentemente da experiência, embora sem ter relação com a forma de uma
experiência em geral e com a unidade sintética na qual somente podemos conhecer
empiricamente os objetos.
Mas, se quisermos formular novos conceitos de substâncias, de forças, de ações
recíprocas, com a matéria que a percepção nos oferece sem tirar da referida experiência o
exemplo da sua re lação, cairíamos então puramente em quimeras e não poderíamos
reconhecer a possibilidade dessas fantásticas concepções por meio de um critério, porque não
foi tomada como guia a experiência nem foram derivados dela.
Tais conceitos inventados não podem receber “a priori”, como as categorias, o caráter
da sua possibilidade, como condições de que toda experiência depende, senão somente “a
posteriori”, como dados pela própria experiência. Assim sendo, sua possibilidade deve ser
conhecida “a posteriori” e empiricamente, ou então não pode sê-lo.
Uma substâ ncia que estiver constantemente no Espaço, porém sem enchê-lo (como esse
intermediário que alguns quiseram introduzir entre a matéria e o ser pensante), ou uma
faculdade particular que tivesse nosso espírito de “prever” o porvir (sem deduzi-lo), ou,
finalmente, a faculdade que teria este espírito de estar em comunhão de pensamento com
outros homens por muito distantes que se encontrem, são todos eles conceitos, cuja
possibilidade carece por completo de fundamento porque não se apóia na experiência nem
nas suas leis já conhecidas, sem o que são apenas um conjunto arbitrário de pensamentos, e
embora sem nenhuma contradição, de modo algum podem pretender a uma realidade
objetiva, nem por conseguinte à possibilidade de objetivos tais como nesse caso foram
concebidos.
No que se refere à realidade, desnecessário será dizer que não pode ser concebida como
tal “in concreto”, sem recorrermos à experiência, em virtude que somente pode ser posta em
relação com a sensação como matéria da experiência e não com a forma da relação, com a
qual poderia melhor o espírito argúir suas ficções.
Deixo, porém, de lado aquilo cuja possibilidade só pode ser deduzida da realidade na
experiência para referir-me aqui à possibilidade de coisas baseadas em conceitos “a priori”.
Insisto em sustentar que desses conceitos apenas, não se pode tirar nunca as próprias coisas,
senão somente enquanto forem condições formais e objetivas de uma experiência em geral.
Parece, de fato, que a possibilidade de um triângulo poderia ser conhecida em si mesma
pelo seu conceito, que em realidade é independente da experiência; porque, de fato, podemos
dar-lhe um objetivo completamente “a priori”, quer dizer, construí-lo.
Mas, como esta construção é a forma apenas de um objeto, o triângulo seria apenas um
produto da imaginação, cujo objetivo teria somente uma possibilidade duvidosa, porque
faltar-lhe-ia para ser de outro modo, alguma coisa a mais, isto e: que esta figura fosse
concebida somente sob as condições em que descansam todos os objetos da experiência.
Porém, a única coisa que acrescenta a esse conceito a representação da possibilidade de
tal objeto, é que o Espaço é uma condição formal “a priori” de experiências externas, e que
esta mesma síntese figurativa, pela qual construímos um triângulo na imaginação, é idêntica
em absoluto à que produzimos na apreensão de um fenômeno para formarmos dele um
conceito experimental.
Desta forma, a possibilidade das quantidades contínuas e até a das quantidades em
geral, pois, seus conceitos são todos sintéticos, não é o resultado desses conceitos por si
mesmos, senão enquanto forem considerados como condições formais da determinação de
objetivos na experiência em geral.
Onde, pois, encontrar os objetivos que correspondem aos conceitos, senão na
experiência, pela qual unicamente recebemos os objetos? Podemos, é verdade, sem
experiência prévia, conhecer e caracterizar a possibilidade das coisas; porém, somente em
relação às condições sob as quais alguma coisa em geral é determinada na experiência como
objetivo; sendo-o por conseguinte, “a priori”, porém sempre em relação à experiência e nos
seus limites.
O postulado para o conhecimento da “realidade” das coisas exige uma “percepção”;
isto é, uma sensação acompanhada de consciência (embora não imediata) do próprio objeto
cuja existência devemos conhecer; mas também é preciso que este objetivo esteja de acordo
com alguma percepção real segundo as analogias da experiência, as que patenteiam o
entrosamento real na experiência possível.
Nenhuma característic a da existência de uma coisa pode, de qualquer forma, ser
encontrada em seu simples “conceito”. Porque mesmo que esse conceito seja tão completo
que nele nada falte para imaginar uma coisa com as suas determinações internas, a existência,
sem embargo, nada tem de comum com todas essas determinações; a questão fica reduzida
apenas a sabermos se uma coisa nos é dada de maneira que a sua percepção possa preceder
sempre ao conceito.
O conceito, precedendo a percepção, significa a simples possibilidade da coisa; a
percepção que dá ao conceito a matéria é unicamente o caráter da realidade. Porém, podemos
também conhecer a existência de uma coisa antes de percebê-la, por conseguinte,
relativamente “a priori”, desde que esteja unida a determinadas percepções, segundo os
princípios do seu enlace empírico (as analo gias).
Então, de fato, a existência da coisa está ligada com as nossas percepções numa
possível experiência, e podemos, seguindo o fio dessas analo gias, passar da nossa percepção
real à coisa na série de possíveis percepções.
É assim que conhecemos pela percepção da agulha de ferro imantada a existência de
uma matéria magnética nos corpos, apesar de ser-nos impossível a percepção imediata desta
matéria pela natureza dos nossos órgáos; porque pelas leis da sensibilidade e “contextus” de
nossas percepções chegaríamos numa experiência a ter a intuição imediata desta matéria se os
nossos sentidos fossem mais delicados, porém, o limite desses sentidos nada faz à forma da
experiência possível em geral.
Até onde chega a percepção e o que dela depende, segundo leis empíricas, até ali
também chega o nosso conhecimento da existência das coisas; se não começarmos pela
experiência ou se não procedermos seguindo as leis do encadeamento empírico dos
fenômenos, em vão pretenderemos adivinhar ou conhecer a existência das coisas.
O idealismo faz graves objeções contra essas regras da demonstração mediata da
existência, e por isso é esta a ocasião de refutá-lo.
Refutação do Idealismo
O idealismo (quero dizer, o material) é a teoria que declara a existência de objetos
exteriores no espaço como duvidosa e indemonstrável, como falsa e impossível. A primeira
doutrina é o idealismo “problemático” de Descartes, que admite somente como irrefutável
esta asserção empírica: “eu sou”; a segunda é o idealismo “dogmático” de Berkeley, que
considera o Espaço com todas as coisas das quais é inseparável como algo impossível em si,
e, por conseguinte, como vãs quimeras as coisas que nele se produzem.
O idealismo dogmático é inevitável quando se faz do espaço uma propriedade
pertinente às coisas em si: porque então ele bem como tudo o que o condiciona é um nada.
Entretanto, na estética transcendental destruímos todos os princípios deste idealismo. O
idealismo problemático, que nada afirma neste particular, mas que sustenta apenas nossa
impotência para demonstrar pela experiência imediata uma existência diferente à nossa, é
racional e demonstra uma investigação filosófica e fundamental, que não consente em
formular um juízo decisivo senão após ter achado uma prova suficiente.
Trata-se, pois, de demonstrar, que não somente nós “imaginamos” as coisas externas,
mas que temos também a “experiência”, o que somente podemos obter demonstrando . que
nossa experiência interna, indubitável para Descartes, é possível somente sob a suposição da
experiência externa.
Teorema - A simples consciência da minha própria existência, embora
empiricamente determinada, demonstra a existência de objetos fora de mim no Espaço
PROVA
Eu tenho consciência da minha existência como determinada no Tempo. Toda
determinação supõe algo “permanente” na percepção. Mas esse permanente não pode ser algo
em mim, justamente pela razão que a minha existência não pode ser determinada no tempo
senão pelo permanente. A percepção deste permanente só é possível por meio de uma “coisa”
que exista fora de mim e não simplesmente pela representação de uma coisa externa a mim.
Por conseguinte, a determinação da minha existência no Tempo só é possível pela
existência de coisas reais que percebo fora de mim. Mas como esta consciência no Tempo
está necessaria mente ligada à consciência da possibilidade desta determinação do Tempo,
segue -se daí que também está necessariamente ligada com a existência das coisas fora de
mim, como à condição da determinação do Tempo; quer dizer, que a consciência da minha
própria existência é ao mesmo tempo uma consciência imediata da existência de outras coisas
externas.
Primeira Observação — Notar-se-á na prova precedente que rebatemos o jogo do
Idealismo com as suas próprias armas e que nos deu um resultado contraproducente para ele.
Este admitia que a única experiência imediata era a interna e que daí somente se deduzia a
existência das coisas externas; porém, isto sem certeza, como sempre que se deduz de efeitos
dados causas “determinadas”, e porque a causa das representações pode-se encontrar também
em nós, podendo acontecer atribuí-las falsamente a coisas externas.
Demonstramos, porém, que a experiência externa é propriamente imediata e que
somente por meio desta, não a consciência da nossa própria existência, porém, sim, a
determinação desta existência no Tempo, quer dizer, a experiência interna.
Está claro, que a representação “eu sou”, que exprime a consciência que pode
acompanhar todo pensamento é o que encerra imediatamente em si a existência de um
sujeito, porém, nenhum “conhecimento”, por conseguinte, nenhum conhecimento empírico,
quer dizer, nenhuma experiência.
É mister para isto, além do pensamento de algo existente, a intuição, e aqui, a intuição
interna, em cuja relação, isto é, ao Tempo, deve o sujeito ser determinado o que somente por
meio de objetos externos pode realizar-se, de tal maneira, que a própria experiência não é
possível senão mediatamente e por meio da experiência externa.
Segunda Observação — O que acabamos de dizer está perfeitamente de acordo com
todo uso experimental da nossa faculdade de conhecer na determinação do Tempo. Não
somente não podemos perceber nenhuma determinação do tempo a não ser pela mudança nas
relações exteriores (o movimento) relativo ao permanente do Espaço (por exemplo, o
movimento do Sol relativamente aos objetos da Terra), senão que nada temos permanente que
possamos submeter como intuição ao conceito de uma substância, a não ser a “matéria”.
E note -se que esta permanência não foi tirada de modo algum da experiência externa,
senão suposta “a priori”, como condição necessária de toda determinação de Tempo e, por
conseguinte, também, como determinação do sentido interno relativamente à nossa própria
existência pela existência das coisas externas.
A consciência de mim mesmo na representa ção “eu”, não é de modo algum uma
intuição, é uma representação puramente intelectual da espontaneidade de um sujeito
pensante. Esse não contém, pois, o menor predicado da intuição que, como permanente, possa
servir de correlativo à de terminação do Tempo no sentido interno, como, por exemplo, a
impenetrabilidade da matéria, como intuição empírica.
Terceira Observação — Pelo fato da existência de objetos exteriores ser necessária
para possibilidade da consciência determinada de nós mesmos, não significa que toda
representação intuitiva de coisas externas contenha ao mesmo tempo a sua existência, pois
esta representação pode muito bem ser consequência da imaginação (como acontece nos
sonhos e na loucura); porém, ela, entretanto, somente se manifesta pela reprodução de antigas
percepções, a que, como já demonstramos, somente são possíveis pela “realidade” de objetos
“externos”.
Foi, pois, suficiente demonstrar que a expe riência interna em geral somente é possível
pela experiência externa em geral. Para certificarmo-nos de que tal ou qual pretendida
experiência não é um simples brinquedo da nossa imaginação, consegue -se por meio das suas
determinações pa rticulares e dos critérios de toda experiência real.
Finalmente, o terceiro postulado se refere à necessidade material na existência e não à
puramente formal e lógica no entrosamento de conceitos. Mas, como nenhuma existência de
objetivos dos sentidos pode ser conhecida completamente “a priori”, senão relativamente, isto
é, pela relação a outro objeto já conhecido, que nunca poderá referir-se mais que a uma
existência compreendida de alguma forma no conjunto da experiência, da qual a percepção
dada forma parte; a necessidade da existência nunca pode ser conhecida por conceitos senão
pelo entrosamento que a une no que é perceptível segundo as leis gerais da expe riência.
Por outro lado, como a só existência que se pode reconhecer como necessária sob a
condição de outro fenômeno é a dos efeitos resultantes de causas dadas pela lei de
causalidade, não é da existência de coisas (substâncias) senão somente da de seus estados que
poderemos conhecer a ne cessidade, e isto, em virtude das leis empíricas da causalidade, por
meio de outros estados conhecidos na percepção.
Segue -se, daí que o critério da necessidade re side apenas nesta lei da experiência
possível, a saber: que tudo o que sucede está determinado “a priori” no fenômeno por sua
causa.
Conhecemos apenas a necessidade de “efeitos” naturais, cujas causas nos foram dadas;
o caráter da necessidade na existência não se estende além do terreno da experiência possível
e todavia nesse terreno não se aplica a existência de coisas como substâncias, posto que e stas
não podem nunca ser consideradas como efeitos empíricos ou como algo que é e que não
nasce.
A necessidade, pois, refere -se somente às rela ções de fenômenos segundo a lei
dinâmica da causalidade e à possibilidade, por nós fundamentada, de deduzir “a priori” de
uma existência dada (uma causa) outra existência (o efeito).
Tudo o que acontece é hipoteticamente necessário; é este um princípio que submete a
mudança no mundo a uma lei, isto é, a uma regra da existência necessária, sem a qual a
própria Natureza não poderia existir.
Por este motivo, o princípio: nada acontece por acaso “in mundo non datur casus”, é
uma lei “a priori” da Natureza, O mesmo acontece com este outro: não há na Natureza uma
necessidade cega, senão condicional, e, por conseguinte, inteligente “non datur fatum”. Estes
dois princípios são leis que submetem o jogo de mudanças a uma “natureza de coisas (como
fenômenos), ou seja, à unidade intelectual, na qual somente pode pertencer à experiência
considerada como unidade sintética de fenômenos. Ambos são dinâmicos.
O primeiro é propriamente uma conseqüência do princípio de causalidade (sob as
analogias da experiência). O segundo pertence aos princípios da modalidade, que acrescenta à
determinação causal, o conceito de necessidade, porém, necessidade sujeita, sem embargo, a
uma regra do entendimento.
O princípio da continuidade impossibilita qualquer salto “in mundo non datur saltus” na
série de fenômenos (das mudanças) e ao mesmo tempo toda lacuna ou vazio entre dois
fenômenos no conjunto de todas as intuições no espaço (“non datur hiatus”).
Este princípio pode enunciar-se assim: nada existe na experiência que prove um
“vacuum” nem que apenas o permita como uma parte da síntese empírica. Porque este vazio,
que pode ser concebido fora do campo da experiência possível (do mundo), não está dentro
da jurisdição do Entendimento somente, o qual unicamente se refere às questões relativas ao
uso dos fenômenos dados em relação ao conhecimento empírico, sendo além disso um
problema para a razão idealista, que foge da esfera de uma experiência possível para julgar o
que circunda e Limita esta mesma esfera.
Esta é, portanto, uma questão que deve ser examinada na dialética transcendental.
Poderíamos com facilidade representar esses quatro princípios “in mundo non datur
hiatus, non datur saltus, non datur casus, non datur fatum” como todos os demais princípios
de origem transcendental, na sua ordem, conformando-nos o seu lugar, mas o leitor
experimentado fá-lo-á por si mesmo ou encontrará com facilid ade o caminho condutor para
isso.
Esses princípios confirmam todos em que não permitem nada na síntese empírica que
possa alcançar o entendimento e ao encadeamento contínuo de todos os fenômenos; quer
dizer, à unidade de seus conceitos. Porque o Entendimento é aquele em que é possível a
unidade da experiência onde todas as percepções devem encontrar o seu lugar.
É maior o campo da possibilidade e o da realidade, e o desta que o da necessidade?
Questões são estas interessantes ao extremo e que exigem uma solução sintética, porém que
entram nos foros da razão, porque equivalem quase a perguntar se todas as coisas como
fenômenos pertencem ao conjunto e ao todo de uma só experiência, da qual toda percepção
indicada é somente uma parte, e por conseguinte não poderia ligar-se a outros fenômenos, ou
se as minhas percepções podem pertencer (no seu encadeamento geral) a algo mais que a uma
única experiência possível.
Em geral o Entendimento não nos dá “a prio ri” a experiência mas, apenas, a regra,
segundo condições subjetivas e absolutas da sensibilidade e da apercepção, as úmcas que
possibilitam essa experiência. Entrementes, foram possíveis outras formas da intuição
(Espaço e Tempo), ou outras formas do Entendimento (a forma discursiva do pensamento ou
a do conhecimento pelos conceitos), não poderíamos, de forma alguma, concebê-las nem
compreendê-las e, se isso fosse possível, não pertenceria sempre à experiência como único
conhecimento no qual os objetivos nos foram da dos.
Porque devem existir mais percepções que as que em geral constituem o todo da nossa
experiência possível, e pode, por conseguinte, existir outro campo diferente da matéria? A
respeito disto nada pode dizer o Entendimento, que apenas se ocupa da síntese do que está
dado.
Além disso, a pobreza dos nossos raciocínios comuns com os quais criamos o grande
império da possibilidade, do qual toda coisa real (todo objetivo de experiência) é somente
uma mínima parte, e tão patente que salta à vista.
Tudo o que é real é possível; resultando dai, natu ralmente, segundo as leis lógicas da
inversão, esta proposição particular: algumas coisas possiveis são reais. O que também
significa: existem muitas coisas possíveis que não são reais.
Parece, é certo, que pode ser posto o número do possível muito por cima do real,
porque é preciso acrescentar algo àquele para que resulte isto. Mas desconheço esta adição ao
possível, porque o que seria preciso acrescentar seria impossível. A única coisa que no meu
entendimento poderia acrescentar-se à conformidade com as condições normais da
experiência é o entrosamento com alguma percepção, e o que está entrosado com uma
percepção, segundo as leis empíricas, é real, embora não seja imediatamente percebido.
Mas não podemos deduzir pelo que é dado, e menos ainda se nada nos foi dado (porque
nada, absolutamente nada, pode ser pensado sem matéria), que no entrosamento universal,
com aquilo que nos é dado na percepção, possa existir outra série de fenômenos, e por
conseguinte seja possível mais de uma experiência, a única que tudo compreende.
Porém, o que é possível apenas sob as próprias condições, simplesmente possíveis, não
o é sob “todas as relações”. E sem embargo, a questão deve ser considerada sob este ponto de
vista geral quando se trata de sabermos se há possibilid ade das coisas se estender além da
experiência.
Mencionei estas questões apenas para não deixar qualquer lacuna no que pertence,
segundo a opinião geral, aos conceitos do Entendimento. Porém, na realidade, a possibilidade
absoluta (que é a que vale sob todos os conceitos) não é um simples conceito do
Entendimento e não pode ter ne nhum uso empírico; pertence exclusivamente à Razão, que
sobrepuja todo uso empírico possível do Entendimento.
Foi por isso que nos contentamos com uma ligeira observação crítica, deixando as
coisas no mesmo estado em que estavam até que mais tarde façamos das mesmas um estudo
meticuloso. Antes de terminarmos este quarto número e com ele o sistema de todos os
princípios do Entendimento puro, devo explicar por que chamei de postula dos aos princípios
da modalidade.
Não considero aqui essa palavra no sentido que lhe deram alguns filósofos modernos
contra a teoria dos matemáticos, aos quais propriamente pertencem; quero dizer, como
significando uma proposição que foi dada como imediatamente certa, porém sem justificá-la
nem demonstrá-la.
Porque se admitirmos que deve conceder-se um assentimento absoluto logo à primeira
vista e sem dedução das proposições sintéticas por evidentes que estas sejam, destrói-se com
isso toda crítica do Entendimento. Como não faltam pretensões absurdas às quais nem a fé
comum é recusada (sem ser uma autoridade), nosso Entendimento ficaria aberto a todas as
opiniões sem que fosse possível negar sua aceitação a proposições que, mesmo ilegítimas,
exigiriam serem aceitas como verdadeiros axiomas.
Assim, pois, quando uma determinação “a priori” é acrescida sinteticamente ao
conceito de uma coisa, é preciso unir necessariamente a uma proposição dessa espécie, senão
uma prova, pelo menos uma dedução da legitimidade desta asserção.
Mas, os princípios da modalidade não são objetivamente sintéticos, porque os
predicados da possibilidade, da realidade e da necessidade, não estendem sequer o conceito a
que se aplicam, quando acrescentam algo à representação do obje tivo. E, embora sejam
sempre sintéticos, não o são, entretanto, senão subjetivamente; isto é, que aplicam ao
conceito de uma coisa (do real), do qual nada mais dizem, a faculdade de conhecer onde tem
sua origem e base.
Se esse conceito é idêntico no Entendimento com as condições formais da experiência,
chama -se então como possível ao seu objetivo; mas, se estiver encadeado com a percepção
(com a sensação como matéria dos sentidos) e determinado por ela mediante o Entendimento,
chama -se real ao seu objeto, e se, finalmente, está determinado pelo entrosamento das
percepções segundo conceitos, então o seu objetivo é necessário.
Os princípios da modalidade não exprimem, pois, com referência a um conceito, apenas
que o ato da faculdade de conhecer que o produz. Entre tanto, denominam-se postulados em
Matemática à proposição prática que somente contém a síntese pela qual obtemos um objeto
e produzimos o conceito; com uma linha dada descrever de um ponto determinado um círculo
numa superfície.
Semelhante proposiç ão não pode ser demonstrada porque o procedimento exigido é
justamente aquele que produzimos primeiramente, o conceito dessa figura.
Podemos, portanto, da mesma forma, postular os princípios da modalidade, posto que
não estende seu conceito das coisas (18) senão que se limitam a mostrar a maneira como esse
conceito em geral está ligado à faculdade de conhecer.
Observação Geral Sobre o Sistema dos Princípios
Uma coisa mui digna de nota que nós não podemos perceber pela categoria só a
possibilidade de alg uma coisa, mas que tenhamos sempre necessidade de uma intuição para
descobrir a realidade objetiva do conceito do entendimento.
Tomemos, por exemplo, as categorias de rela ção.
Como primeiro, qualquer coisa pode existir como sujeito e não como simples
determinação de outra coisa; quer dizer, como pode ser substância; ou, segundo, porque um
algo é, outro também deve ser; por conseguinte, como algo em geral pode ser causa; ou,
terceiro, como quando muitas coisas são, porque uma existe, algo nas outras a segue, e
reciprocamente, e como um comércio de substâncias pode assim estabelecer-se.
Simples conceitos não podem indicar-nos isso.
E assim se dá com todas as outras categorias. P. ex.: como uma coisa pode ser idêntica
a muitas, quer dizer, como pode ser uma quantidade etc.. Assim, enquanto a intuição falta não
se sabe pelas categorias, se pensa um objeto, nem se em geral pode convir-lhe um objeto; por
onde se vê que por si mesmos não são conhecimentos, mas simples formas de pensar, que
servem para transformar em conhecimentos as intuições dadas. Resulta também que nenhuma
proposição sintética podemos tirar somente das categorias.
Quando digo, por exemplo, que em toda existência há uma substância, quer dizer, algo
que só como sujeito pode existir e não como simples predicado, ou que uma coisa é um
“quantum”, em tudo isso nada há que nos sirva para sair de um conceito dado a uni-lo a
outro. Assim, pois, nunca se pôde provar por simples conceitos puros do entendimento uma
proposição sintética; esta, por exemplo: tudo que existe acidentalmente tem uma causa.
Quanto nisto se tem feito é demonstrar que, sem esta relação, não compreenderíamos a
existência acidental; quer dizer, que não podemos conhecer “a priori", pelo entendimento, a
existência de tal coisa.
Mas não se segue disto que esta relação seja a condição da possibilidade da coisa
mesma. Se recordamos nossa prova do princípio de causalidade, que tudo que ocorre (todo
evento) supõe uma causa, se advertirá que não podemos realizá-la mais do que em relação
aos objetos da experiência, por conseguinte como princípio do conhecimento de um objeto
dado na intuição empírica e não só por conceitos.
Não se pode, porém, negar que esta proposição: todo evento tem uma causa, não seja
evidente para todos por simples conceitos; mas então o conceito de acidente está já entendido
de tal maneira que contém, não a categoria de modali dade (como algo cuja não existência
pode conceber-se) mas a de relação (como algo que só pode existir como conseqüencia de
outra coisa); e, neste caso, a proposição é por completo idêntica a esta outra; tudo o que não
pode existir, senão como conseqüência, tem sua causa. Com efeito, quando queremos dar
exemplos de existência acidental, recorremos sempre a mudanças e não à simples
possibilidade de conceber o contrário.(19)
Mudança, porém, é sucessão, e, como tal, não é possível mais senão por uma causa, e
cuja não-existência, por conseguinte, em si é possível. Reconhece-se desse modo a
contingência em que não pode existir senão como efeito de uma causa. Quando se admite,
pois, uma coisa como contin gente, é uma proposição analítica dizer que tem uma causa.
Todavia, é mais notável que para compreender a possibilidade de coisas pelas
categorias, e, por conseguinte, para demonstrar a realidade objetiva destas últimas, tenhamos
sempre necessidade, não só de intuição, como também de intuições exteriores. Tomemos, por
exemplo, os conceitos puros de relação e achamos:
1.° Para dar ao conceito de substância na in tuição algo de fixo que corresponda
(provando com isto a realidade objetiva desse conceito), temos necessidade de uma intuição
no espaço (da intuição da matéria), porque só o espaço determina constantemente, enquanto
que o tempo, e por conseguinte, quando se encontra no sentido interior, transcorre sem cessar.
2.° Para apresentar a mudança como intuição correspondente ao conceito de
causalidade, somos obrigados a tomar como exemplo o movimento, como mudança no
espaço; e somente assim podemos fazer-nos perceptíveis mudanças cuja possibilidade não
pode compreender nenhum entendimento puro.
Mudança é união de determinações contraditoriamente opostas entre si na existência de
uma só e mesma coisa. Mas, como agora é possível que de um estado dado siga, na mesma
coisa, outro estado que lhe seja oposto? Coisa é esta que não pode compreender nenhuma
razão sem exemplos, não podendo ser inteligível sem uma intuição. Esta intuição é a do
movimento de um ponto no espaço, cuja existência em diferentes lugares (como
conseqüência de determinações contrárias) nos faz perceber a mudança; porque, ainda para
que possamos conceber mudanças internas, é mister que nos representemos o tempo de uma
maneira figurada, como forma do sentido traçado desta linha (pelo movimento), e, por
conseguinte, nossa existência sucessiva em diferentes estados por uma intuição exterior.
A razão consiste em toda mudança como algo fixo na intuição, ainda que para poder ser
percebido supõe como mudança e que não se encontre no sentido interno nenhuma intuição
fixa.
3.° Enfim, a categoria de reciprocidade não pode ser compreendida, quanto a sua
possibilidade, só pela razão; e, por conseguinte, a realidade objetiva desse conceito não pode
ser apercebida sem intuição, e intuição exterior no espaço. Com efeito, como conceber a
possibilidade de que, existindo muitas substâncias, da existência de uma resulta algo (com
efeito) na da outra, e reciprocamente; e que, por conseguinte, pela razão que existe algo na
primeira que só pela existência da segunda pode compreender-se, deva suceder outro tanto
com a segunda com respeito à primeira?
Porque isto é necessário para que exista reciprocidade; mas que não pode compreenderse de coisas que subsistem umas de outras por sua substância, completamente isoladas.
Assim, Leibnitz, ainda, atribuindo uma reciprocidade às substâncias do mundo, mas às
substâncias tais como as concebe só o entendimento, teve necessidade de recorrer à
intervenção da divindade; porque viu com razão que esse comércio de substâncias era
incompreensível só por sua existência.
Mas nós outros podemos fazer-nos admissível a possibilidade desta reciprocidade de
substâncias como fenômenos, representando-as no espaço, por conseguinte, na intuição
exterior; porque o espaço contém “a priori” relações formais exteriores como condiç ões da
possibilidade de relações reais em si na ação e na reação, por conseguinte, na reciprocidade.
Assim mesmo é fácil provar que a possibilidade de coisas como quantidades, e, por
conseguinte, a realidade objetiva da categoria de quantidade, não podem ser expostas senão
na intuição exterior, nem aplicadas depois ao sentido interno senão por meio dessa intuição.
Para não ser prolixo deixo os exemplos ao cuidado do leitor.
Toda esta observação é de grande importância, não só para confirmar nossa precedente
refutação do idealismo, como também ainda para, quando se falar do conhecimento em si a
simples consciência interna, e a determinação de nossa natureza sem o auxílio de intuições
empíricas, fazer-nos ver os estreitos limites da possibilidade de semelhante conhecimento.
Esta já é a última conseqüência de toda esta seção. Todos os princípios do
entendimento puro não são mais do que princípios “a priori” da possibilidade da experiência;
com esta unicamente se relacionam todos os princípios sintéticos “a priori”, e sua mesma
possibilidade radica por completo nesta relação.
** *
NOTAS
(1) Intuição, como Kant aqui a define, é a representação imediata que faço de um
objeto. O conhecimento de um objeto não tem que ser sempre imediato, pois sem necessidade
de contempla -lo imediatamente posso obter o seu conhecimento. Com efeito: seja um objeto
qualquer, o Pacaembu, por exemplo. Posso conhecê-lo, representando-o em todos os seus
elementos, e pelas explicações fornecidas ter do mesmo um conhecimento mais ou menos
perfeito. Tal conhecimento será sempre imediato, porque nele intervie ram uma série de
representações, que as informações daquele que nos descreveu o Pacaembu, foi despertando
em mim.
Mas este, que é um meio de conhecer, não é o único. Eu posso, sem intermediários, ir
ver o Pacaembu. Neste caso não tenho uma representação de representações como antes, mas
sim uma representação imediata, quer dizer, uma representação do objeto. Intuição é, pois,
uma representação imediatamente relacionada com o objeto. É um modo de conhecimento
imediato; assim como o primeiro é imediato: por conceitos e imagens. A intuição, por
conseguinte, é um elemento muito importante de nosso conhecimento. É a primeira relação e
a mais imediata que com o objeto pode manter. De sorte que um conceito que careça de
intuição que lhe corresponda, não pode fornecer nenhum conhecimento imediato. Deve -se ter
desde já na lembrança esta observação, para acompanhar Kant no desenvolvimento dos seus
primeiros princípios. Náo se esqueça, tampouco, que todo pensamento se propõe como meio
de intuições, e que quando um pensamento carece de intuição, é porque não tem objeto a que
referir-se imediatamente, é portanto vão, e os conceitos que produz, vazios, sem conteúdo
algum, pois este só pode ser dado pela intuição. Terá, é verdade, um objeto o conceito desta
classe, mas sera um outro conceito, e estaremos no mesmo caso se carece de intuição, ou uma
imagem da fantasia, quer dizer, uma intuição da ima ginação e nada mais, conceitos assim,
sendo obje to, são conceitos vazios, são simples negações, como dizia Kant: nihil privativum;
de nenhuma maneira, conceitos reais; dizem o que uma coisa não é, e não o que ela é, pois só
o conceito que possui um objeto é um ens reale. Disto resultará, depois, com todo rigor, que
não podemos conhecer a Deus, porque este objeto, Deus, nunca se nos apresenta
intuitivamente. Teremos, certamente, o seu conceito, mas não o seu conhecimento imediato,
pois não é Deus um objeto sensível, um fenômeno, cuja intuição nos seja acessível. Tudo
quanto se afirma de Deus no conhecimento, será negação, e ao dizer que é infinito, entenderse-á que não é finito, etc. O importante, pois, é não tirar da idéia que não existem
conhecimentos propriamente ditos sem intuições, e intuições sem objetos, objetos sem
fenômenos. (Nota do Tradutor)
(2) Os alemães são os únicos que empregam hoje a palavra Estética para designar o que
outros chamam “crítica do gosto”. Esta denominação se deve à fracassada esperança do
notabilissimo crítico Baurngarte n, que acreditou poder reproduzir a princípios racionais o
juízo crítico do belo, e elevar as suas regras à categoria de ciência. Mas esse esforço é vão.
Efetivamente essas regras ou critérios são empíricas em suas prin cipais fontes, e por
conseguinte não poderiam jamais servir de leis “a priori” próprias a regular o gosto em seus
julgamentos, pois é este que serve de pedra de toque para a retificação dos princípios. É, pois,
prudente o abandono dessa denominação, e reservá-la para aquela doutrina que é verdadeira
ciência, ou bem empregá-la em comum com a Filosofia especulativa, e entender a palavra
Estética ora em sentido transcendental, ora em sentido psicológico.
(3) Os predicados do fenômeno podem ser atribuídos ao objeto mesmo em relação com
nosso sentido, por exemplo: a rosa, a cor vermelha e o odor; mas a aparência não pode
jamais, como predicado, ser atribuída ao objeto, porque precisamente atribui ao objeto em si
o que não lhe pertence mais do que pela relação com os sentidos, ou em geral com o sujeito,
como, por exemplo, os dois anéis atribuídos primitivamente a Saturno.
O fenômeno é qualquer coisa que não se pode achar no objeto mesmo, mas sempre na
relação do objeto para com o sujeito, e que é insepa rável da representação que temos; assim é
que, com razão, os predicados do espaço e do tempo são atribuídos aos objetos do sentido
como tais, e nisto não existe nenhuma aparência.
Já, pelo contrário, se atribuo a cor vermelha à rosa em si, e os anéis a Saturno, ou a
todos os objetos exteriores a extensão em si, sem atender á determinada relação desses
objetos com o sujeito, nem limitar meu juízo por conseguinte, então surge a aparência.
(4) Aliem Weissenchaft. A tradução literal seria Catártico.
(5) A unidade analítica da consciência tem a sua origem em todos os conceitos comuns
considerados como tais. Quando, por exemplo, concebo o vermelho em geral, represento-me
por isso uma qualidade que (como caráter) pode ser achada em qualquer parte ou ser ligada a
outras representaçôes; não é, pois, senão sob a condição de conceber de antemão uma
unidade sintética possível que podemos conceber a unidade analítica. Para imaginarmos uma
representação comum a coisas diferentes, devemos considerá-la como dependente a essas
coisas e, que, além da sua analogia, possuem alguma coisa diferente entre elas das restantes,
pelo que se deduz que devemos concebê-las como formando uma unidade sintética com
outras representações (embora sejam apenas possibilidades), muito antes que eu possa
conceber nelas a unidade analítica da consciência que a transforma num “conceptus
communis”. A unidade sintética da nossa percepção é, pois, o ponto mais elevado ao qual
podemos aplicar nosso entendimento, bem como toda a lógica e, por seu intermédio, a
Filosofia transcendental; mais ainda, esta faculdade é o próprio entendimento.
(6) O tempo e o espaço e todas as suas partes são intuições, por conseguinte,
representações particulares como a diversidade que elas em si contêm (V. a Estética
transcendental). Não são, pois, simples conceitos por meio dos quais esteja a consciência
deles como que contida em muitas representações, sendo ao contrário estas as que se contêm
em uma consciência só, estando, por conseguinte, como compostas nelas; donde se segue que
a unidade da consciência se nos apresenta como sintêtica, e não obstante como primitiva. Esta
particularidade dos mesmos é importante na aplicação (V. § 25).
(7) A extensa teoria das quatro figuras subjetivas não conceme senão aos raciocínios
categóricos, e ainda que, em verdade, não seja mais do que uma arte de surpreender,
ocultando as conseqüências imediatas (“consequentiae imediatae") sob as premissas de um
raciocínio puro, a aparência de muitas espécies de conseqüências, que não há na primeira
figura, não teria ganho, sem embargo, muito se não tivesse conseguido apresentar
exclusivamente os juízos categóricos como aqueles a quem todos os outros devem referir-se,
e que, segundo o § 9, é falso.
(8) A prova se funda na unidade representada da intuição pela qual um objeto se dá a
que sempre encerra em si mesma síntese da diversidade dada em uma intuição e contém já a
relação desta diversidade com a unidade da apercepção.
(9) O movimento de objeto no espaço não pertence a uma ciência pura e tampouco
pertence à Geometria; porque não sabemos “a priori”, senão pela experiência, que algo seja
movível. Mas o movimento como descrição de um espaço é um ato puro da síntese sucessiva
da diversidade na intuição externa em geral, pela imaginação produtiva e pertence, não só à
Geometria, como também à Filosofia transcendental.
(10) Não compreendo a dificuldade de admitir que o sentido interno é afetado por nós
mesmos. Todo ato da atenção pode proporcionar-nos um exemplo. Nesta, o entendimento
determina sempre ao sentido inte rior conforme o enlace que ele concebe para formar uma
intuição interna, que corresponde à diversidade contida na síntese do entendimento. Cada um
pode observar em si mesmo como o espírito é freqüentemente desta maneira.
(11) O eu penso expressa o ato pelo qual determino minha existência. A existência está
portanto já dada nele; mas a maneira como devo determinar esta existência, quer dizer, pelos
elementos diversos que lhe pertencem, para isto é preciso uma intuição de si mesmo que tem
por fundamento uma fórmula “a priori”, quer dizer, o tempo que é sensível e pertence à
receptividade do determinável.
Se não tenho, pois, outra intuição de mim mesmo que do que há em mim de
determinante, de cuja espontaneidade somente estou cônscio e que dei antes do ato da
determinação da mesma maneira que o tempo dá o determinável, não posso então determinar
minha existência como a de um ser espontâneo, mas somente me represento a espontaneidade
de meu pensar.
Quer dizer, meu ato de determinação e minha existência não são nunca determináveis
senão sensivelmente, ou seja como existência de um fenômeno. Todavia, esta espontaneidade
faz com que eu a chame inteligência.
Ainda que todas as categorias constituam o pensamento de um objeto geral pela união
da diversidade em uma apercepção, a consciência própria não é conhecimento de si mesmo.
Assim como para o conhecimento de um objeto diferente de mim necessito, além do
pensamento de um objeto geral (na categoria), uma intuição pela qual determino esse
conceito geral, assim também para o conhecimento de mim mesmo ne cessito, além da
consciência de que eu penso, uma intuição da diversidade que em mim existe, mediante a
qual determino esse pensamento.
Eu existo, pois, como inteligência que tem consciência unicamente de sua faculdade
sintética, mas que, em relação ao diverso que deve sintetizar, se acha sujeita a uma condição
restritiva chamada sentido mesmo e que não pode tomar perceptível esse enlace senão
segundo as relaçôes do tempo, as quais são totalmente estranhas aos conceitos próprios do
entendimento. Donde se segue que esta inteligência não pode conhecer-se a si mesma senão
como se aparece em uma intuição particular (a qual não pode ser intelectual e dada pelo
entendimento mesmo) e não como se conheceria se sua intuição fosse intelectual.
(12) O espaço apresentado como objeto (como realmente é preciso em Geometria)
contém, além da simples forma da intuição, a composição da diversidade dada em uma
representação intuitiva, segundo a forma da sensibilidade, de tal sorte que a forma da intuição
dá unicamente a diversidade e a intuição formal à unidade da representação.
Eu apreciei na Estética esta unidade, como pertencendo simplesmente à sensibilidade,
somente para indicar que precede a todo conceito, ainda que em verdade pressuponha uma
síntese que não pertence dos sentidos, mas que possibilita todo conceito de espaço e de
tempo. Como por esta síntese (determinando o entendimento a sensibilidade) são dados o
espaço e o tempo primeiramente como intuições, a unidade desta intuição “a priori” pertence
ao espaço e ao tempo e não ao conceito do entendimento (§ 24).
(13) Desta maneira se prova que a síntese da apreensão, que é empírica, deve concordar
necessariamente com a síntese da apercepção, que é intelectual e contida totalmente “a priori”
na categoria. A união da diversidade da intuição é produzida por uma só e mesma
espontaneidade, chamada ali imaginação e aqui entendimento.
(14) A fim de não se alarmarem precipitadamente com as perigosas conseqüências
desta proposição, advertirei que as categorias no pensar não estão limitadas pelas condições
de nossa intuição sensível, mas têm um campo ilimitado, e que o conhecimento do que
pensamos ou a de terminação do objeto tem necessidade da intuição; mas que faltando esta, o
pensamento do objeto pode ainda ter suas conseqüências verdadeiras e úteis relativamente ao
uso que o indivíduo faz da razão, mas como não se trata aqui da determinação do objeto, e
por conseguinte do conhecimento, senão também da do sujeito e de sua vontade, não chegou
ainda o momento para falar disto.
(15) Até aqui acreditei necessária a divisão em parágrafos, porque nos ocupamos de
conceitos elementares, mas, agora, queremos mostrar o uso dos mesmos, e a exposição
poderá prosseguir em uma continua compenetração sem necessidade dos mesmos.
(16) A falta de juízo é o que propriamente se denomina estupidez, defeito para o qual
não há remédio. Uma cabeça obtusa ou limitada, que só carece de grau conveniente de
inteligência e de conceitos próprios, é suscetível de instrução e mesmo de erudição. Mas
como quase sempre nestes casos acompanha a falta de juízo (segundo Petri), não é raro
encontrar homens muito instruídos que deixam freqüentemente transparecer essa falta grave
em seus trabalhos.
(17) Toda união (“conjunctio”) ou é uma composição (“compositio”), ou uma conexão
(“nexus”). O primeiro é uma síntese de elementos diversos que não se pertencem
necessariamente uns aos outros, como por exemplo: os dois triângulos em que um quadrado
se decompõe cortado por uma diagonal não se pertencem necessariamente um ao outro.
Assim é a síntese do homogêneo em tudo o que pode ser examinado mate maticamente
(síntese que por seu turno pode dividir-se em síntese de agregação e síntese de coalisão,
conforme se refira a quantidades extensivas ou a intensivas).
A segunda união (“nexus”) é a síntese de elementos diversos que necessariamente se
pertencem uns aos outros, como, por exemplo, o acidente em relação com a substância, ou o
efeito e a causa, e que, por conseguinte, ainda que heterogêneos, se representam como unidos
“a priori”. E denomino a esta união dinâmica, porque não arbitrária, ainda que se refira à
união da existência da diversidade, união esta que pode por sua vez dividir-se em união fisica
de fenômenos entre si e em uma união metafísica, cujas sínteses se representam na faculdade
de conhe cer “a priori”.
(18) A “realidade” de uma coisa diz com mais segurança de uma coisa que a sua
possibilidade, porém não mais “na coisa” ; porque a coisa não pode conter nunca na realidade
mais do que estava contido na sua possibilidade completa. Mas como a possibilidade era
apenas uma “posição” da coisa em relação ao Entendimento (no seu uso empírico), a
realidade é, ao mesmo tempo, o encadeamento da coisa com a percepção.
(19) Pode-se facilmente conceber a não existência da matéria, e, não obstante, os
antigos não a tiveram por contingente. Mas a vicissitude mesma do ser e do não ser de um
estado dado de uma coisa, em que toda mudança consiste, em nada prova a contingência
deste estado de uma maneira indireta ou pela realidade de seu contrário; p. ex.: o repouso de
um corpo que sucede ao movimento desse corpo, porque o repouso seja o contrário do
movimento.
Porque esse contrário não está aqui oposto ao outro senão logicamente e não realmente.
Para provar a contingência do movimento, seria preciso provar que, em lugar de estar em
movimento no instante precedente, haveria sido possível que o corpo estivesse então em
repouso: não basta que o tivesse sido em seguida, porque então os dois contrários podem
coexistir perfeitamente.`)
.then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)