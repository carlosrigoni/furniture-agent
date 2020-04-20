# :rocket: Scenario teste mobile

![picture](https://bitbucket.org/danrigoni/scenario-mobile-teste/raw/8aa8481f08f3e88e52705a36d0cc92d9c4bd078a/.Screenshots/screenshots1.png)
![picture](https://bitbucket.org/danrigoni/scenario-mobile-teste/raw/8aa8481f08f3e88e52705a36d0cc92d9c4bd078a/.Screenshots/screenshots2.png)
![picture](https://bitbucket.org/danrigoni/scenario-mobile-teste/raw/8aa8481f08f3e88e52705a36d0cc92d9c4bd078a/.Screenshots/screenshots3.png)


## :rocket: React Native é realmente nativo?


Sim! React Native é nativo mesmo. Funciona assim: dentro do seu dispositivo existem dois núcleos: um núcleo nativo (Java para Android e Objective-C para iOS) e um núcleo de Javascript, chamado JavaScriptCore — ou JSC, para os íntimos.
Resumidamente, o RN compila um "aplicativo base", que é apenas um app simples com a função de executar seu código JavaScript no JavaScriptCore. Assim, o JavaScript "orquestra" os componentes nativos — a partir do núcleo JS — por meio de uma ponte ("bridge"). A comunicação é de via dupla.


## :rocket: Como instalar e executar

---git clone https://danrigoni@bitbucket.org/danrigoni/scenario-mobile-teste.git
--- cd scenario-mobile-teste
--- yarn ou npm install
--- abra o emulador android
--- react-native run-android