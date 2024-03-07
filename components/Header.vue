<template>
  <header class="header fixed w-screen">
    <div class="header__bg absolute left-0 top-0 h-full w-screen"></div>
    <div class="flex justify-between px-6 pt-6 lg:px-6">
      <div class="">
        Logo <br />
        glogo
      </div>
      <div class="flex">
        <Menu class="hidden lg:flex" />
        <div class="hamburger lg:hidden"><span></span></div>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  z-index: 2000;
  background-color: transparent;
  transition: transform 0.4s cubic-bezier(0.2, 0, 0.1, 1);

  &__bg {
    z-index: -1;
    background: linear-gradient(
      180deg,
      rgba(2, 118, 131, 1) 30%,
      rgba(2, 118, 131, 0) 100%
    );
  }
}
.hamburger {
  --width: 2rem;
  --gap: 0.65rem;

  position: relative;
  width: var(--width);
  height: calc(var(--gap) * 2 + 2px);
  padding: var(--gap) 0;
  &:hover {
    cursor: pointer;

    span {
      opacity: 0;
    }
    &::before {
      transform: translateY(var(--gap)) rotate(45deg);
    }
    &:after {
      transform: translateY(calc(-1 * var(--gap))) rotate(-45deg);
    }
  }

  span,
  &::before,
  &::after {
    display: block;
    width: 100%;
    height: 0.125rem;
    background-color: #fff;
    border-radius: 50em;
    transition: all 0.15s 0.1s ease-in;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    transform-origin: center center;
  }

  &::before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }
}
</style>
