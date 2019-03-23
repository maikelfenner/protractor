Critérios de Aceitação:

DADO que o usuário deseja visualizar com mais detalhes a imagem do produto
QUANDO clicar na imagem do produto em destaque
ENTÃO deve ser exibida a imagem em um tamanho maior

DADO que o usuário deseja adicionar o produto à lista de desejos sem estar logado
QUANDO clicar no botão de adicionar à lista de desejos
ENTÃO deve exibir uma mensagem informando que o usuário deve estar logado

DADO que o usuário deseja selecionando a cor do produto
QUANDO clicar em uma cor diferente da que está selecionada
ENTÃO devem ser exibidas as imagens da cor correspondente

DADO que o usuário deseja aumentar a quantidade de unidades do produto que serão adicionadas no carrinho
QUANDO clicar no botão de adicionar
ENTÃO o valor do campo de quantidade deve ser incrementado por um

DADO que o usuário deseja diminuir a quantidade de unidades do produto que serão adicionadas no carrinho
QUANDO clicar no botão de reduzir
ENTÃO o valor do campo de quantidade deve ser decrementado por um

DADO que o usuário deseja diminuir a quantidade de unidades do produto que serão adicionadas no carrinho 
    e que a quantidade de produtos selecionados seja igual a 1
QUANDO clicar no botão de reduzir
ENTÃO o valor do campo de quantidade deve se manter em 1

DADO que o usuário deseja adicionar o produto ao carrinho
QUANDO clicar no botão "Adicionar ao carrinho"
ENTÃO deve ser exibida uma mensagem de que o produto foi adicionado com sucesso

DADO que o usuário deseja adicionar o produto ao carrinho
QUANDO clicar no botão "Adicionar ao carrinho"
ENTÃO deve ser exibida a quantidade de unidades do produto que ele selecionou
