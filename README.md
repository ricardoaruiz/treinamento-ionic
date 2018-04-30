## Treinamento de IonicTreinamento de Ionic

**Sites**
- https://ionicframework.com/getting-started
- https://creator.ionic.io/app/login
- https://ionicframework.com/docs/cli/
- https://ionicframework.com/docs/cli/commands.html

**Ferramentas necessárias:**
- NodeJs 
- Visual Studio Code
- Cordova (npm install -g cordova)
- Ionic (npm install -g ionic)

**Criando o projeto**
```
ionic start <myApp> <template>
```
**Subindo o projeto**
``` 
ionic serve
```
Para iniciar o app com o lab para ver os layouts nas diferentes plataformas
``` 
ionic serve -l
```


### Componentes Ionic

1. **ActionSheet**

	Criamos uma página para mostrar o ActionSheetPage

	```
    ionic generate page ActionSheetPage
	```

    Após a criação da página, adicionar ela no "app.modules.ts"

    ```
    import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
    ```

    Adicionar no "declarations" e no "entryComponents" do "app.module.ts"

    **Referências ActionSheet:**

     https://ionicframework.com/docs/components/#action-sheets
     https://ionicframework.com/docs/ionicons/

2. **Alert**

    **Referências Alert:**
    
    https://ionicframework.com/docs/components/#alert

3. **Badge**

    **Referências Badge:**

    https://ionicframework.com/docs/components/#badges

4. **Button**

    **Referências Button:**

   https://ionicframework.com/docs/components/#buttons    


5. **Card**

   **Referências Card:**

   https://ionicframework.com/docs/components/#cards

6. **Checkbox**

   **Referências Checkbox:**

   https://ionicframework.com/docs/components/#checkbox

7. **Range**

   **Referências Range:**

  https://ionicframework.com/docs/components/#range   
