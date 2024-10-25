/// <reference types="webdriverio/async" />

describe('Teste de Navegação', () => {
  beforeEach(async () => {
    await browser.url('/');
    await browser.pause(1000);
  });
  it('deve navegar para a página About', async () => {
   
    const aboutLink = await $('a=Sobre');
    await aboutLink.click();

    const aboutTitle = await $('h1=Sobre Page');
    await expect(aboutTitle).toBeDisplayed();
  });

  it('deve navegar para a página Contato', async () => {
   
    const contactLink = await $('a=Contato');
    await contactLink.click();

    const contactTitle = await $('h1=Contato Page');
    await expect(contactTitle).toBeDisplayed();
  });

  it('deve navegar para a página Serviços', async () => {
   
    const servicesLink = await $('a=Serviços');
    await servicesLink.click();

    const servicesTitle = await $('h1=Serviços Page');
    await expect(servicesTitle).toBeDisplayed();
  });

  it('deve voltar para a página Home', async () => {
  
    const aboutLink = await $('a=Sobre');
    await aboutLink.click();

    const homeLink = await $('a=Home');
    await homeLink.click();

    const homeTitle = await $('h1=Home Page');
    await expect(homeTitle).toBeDisplayed();
  });
});
