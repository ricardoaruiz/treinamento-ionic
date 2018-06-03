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

8. **Datetime**

   **Referências Datetime:**

   https://ionicframework.com/docs/components/#datetime

9. **FAB´s**

   **Referências FAB:**

   https://ionicframework.com/docs/components/#fabs

9. **Grid**

   **Referências Grid**

   https://ionicframework.com/docs/components/#grid   

10. **Icon**

   **Referências Icon**

   https://ionicframework.com/docs/components/#icons   

11. **Input**

   **Referências Input**

   https://ionicframework.com/docs/components/#inputs

12. **List**

   **Referências List**

   https://ionicframework.com/docs/components/#lists

13. **Toggle**

   **Referências Toggle**

   https://ionicframework.com/docs/components/#toggle

14. **Loading e Spinner**

   **Referências Loading e Spinner**

   https://ionicframework.com/docs/components/#loading
   https://ionicframework.com/docs/api/components/spinner/Spinner/

15. **Toast**

   **Referências Toast**

    https://ionicframework.com/docs/components/#toast
    https://ionicframework.com/docs/api/components/toast/ToastController/

16. **Toolbar**

   **Referências Toolbar**

    https://ionicframework.com/docs/components/#toolbar

17. **Segment**

   **Referências Segment**

    https://ionicframework.com/docs/components/#segment    
    
18. **Tabs**

   **Referências Tabs**

   https://ionicframework.com/docs/components/#tabs
   https://ionicframework.com/docs/api/components/tabs/Tabs/

19. **Select**

   **Referências Select**

   https://ionicframework.com/docs/components/#select
   https://ionicframework.com/docs/api/components/select/Select/
   https://github.com/ionic-team/ionic-preview-app/tree/master/src/pages/selects/basic

20. **Menu**

    **Referências Menu**

    https://ionicframework.com/docs/components/#menu
    https://ionicframework.com/docs/api/components/menu/Menu/   

21. **Navigation**

   **Referências Navigation**

   https://ionicframework.com/docs/components/#navigation

22. **Modal**

   **Referências Modal**

   https://ionicframework.com/docs/components/#modals
   https://ionicframework.com/docs/api/components/modal/ModalController/      

23. **Slides**

    **Referências Modal**

    https://ionicframework.com/docs/components/#slides
    https://ionicframework.com/docs/api/components/slides/Slides/

24. **Popover**

    **Referências Popover**

    https://ionicframework.com/docs/components/#popovers
    https://ionicframework.com/docs/api/components/popover/PopoverController/

### Build

**Adiciona a plataforma Android**

```
ionic cordova platform add android
```

**Gera o splash e o icone do aplicativo**

```
ionic cordova resources -f
```

**Gera APK debug**

```
ionic cordova build android
```

**Roda a App no device em modo DEV**

```
ionic cordova run android --device
```

**Gera APK release**

```
ionic cordova build android --release --prod
```

**Gerar chave do aplicativo**
O arquivo "keytool.exe" fica na pasta bin do jre

```
keytool.exe -genkey -v -keystore "D:\desenvolvimento\git-repo\treinamento-ionic\treinamento-ionic.keystore" -alias treinamentoIonic -keyalg RSA -keysize 2048 -validity 10000
```

**Assinar arquivo de release**
```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore "D:\desenvolvimento\git-repo\treinamento-ionic\treinamento-ionic.keystore" "D:\desenvolvimento\git-repo\treinamento-ionic\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk" treinamentoIonic
```

**Gerar APK assinado**

Ir na pasta da versão do SDK que será gerado
```
cd C:\"Program Files (x86)"\Android\android-sdk\build-tools\26.0.0
```

```
./zipalign.exe -v 4 "D:\desenvolvimento\git-repo\treinamento-ionic\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk" "D:\desenvolvimento\git-repo\treinamento-ionic\treinamento-ionic-0.0.1.apk"
```      