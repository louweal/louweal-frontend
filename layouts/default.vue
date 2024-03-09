<template>
  <main>
    <Cursor />
    <Background />

    <Header />

    <div class="container">
      <div class="row">
        <div class="box sm:box-10 sm:order-2">
          <NuxtPage />
        </div>
        <div class="box sm:box-1 sm:order-1">
          <div class="flex justify-center sm:fixed sm:min-h-screen">
            <SocialIcons />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </main>
</template>

<style>
body {
  color: var(--color-light);
  font-weight: 400;
}
</style>
