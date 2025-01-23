<template lang="pug">
  div.main
    div.keyboard 
        div.keyboard__front.face-keyboard
            div.keyboard__f-top
                div.keyboard__speaker
                div.keyboard__buttons
                    div.keyboard__button
                    div.keyboard__button
                    div.keyboard__button
                    div.keyboard__button
                    div.keyboard__button
                    div.keyboard__button
                div.keyboard__led
                    
                    - var n = 1;
                        while n < 11
                            div(class='keyboard__line')
                                div(class='keyboard__dot')
                                div(class='keyboard__dot')
                                div(class='keyboard__dot')
                                div(class='keyboard__dot')
                                div(class='keyboard__dot')
                            - n++
                            
                div.keyboard__buttons
                    div.keyboard__button
                    div.keyboard__button
                    div.keyboard__button
                    div.keyboard__button
                    div.keyboard__button
                    div.keyboard__button
                div.keyboard__speaker

            div.keyboard__f-bottom
                
                - var n = 1;
                    while n < 22
                        div(class='key')
                            div(class='key__front face-key key__front-'+n)
                            div(class='key__back face-key')
                            div(class='key__right face-key')
                            div(class='key__left face-key')
                            div(class='key__top face-key')
                            div(class='key__bottom face-key')
                        - n++
                - var n = 1;
                    while n < 15
                        div(class='key key--black key--black-'+n)
                            div(class='key__front face-key')
                            div(class='key__back face-key')
                            div(class='key__right face-key')
                            div(class='key__left face-key')
                            div(class='key__top face-key')
                            div(class='key__bottom face-key')
                        - n++
                
        div.keyboard__back.face-keyboard
        div.keyboard__right.face-keyboard
        div.keyboard__left.face-keyboard
        div.keyboard__top.face-keyboard
        div.keyboard__bottom.face-keyboard
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
/* Variables */
$white-1: #FFFFFF;
$white-2: #B2B3D2;
$white-3: #2A2631;
$purple-1: #B8ACFB;
$purple-2: #6E68C5;
$blue-1: #3CFBFE;
$blue-2: #00A6D1;
$orange-1: #FFA862;
$green-1: #00D27F;
$pink-1: #FF5EC1;
$gray-1: #3F3B43;
$gray-2: #2A2631;
$gray-3: #1A191C;
$gray-4: #151514;

/* Reset */
*, *::after, *::before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
    transform-style: preserve-3d;
}

.main{
    width: 800px;
    height: 600px;
    position: relative;
}
/*Base*/
.face-keyboard,
.face-key{ position: absolute; }

.keyboard{
    position: relative;
    left: 27%;
    top: 33%;

    transform-origin: bottom left;
	transform:
		perspective(10000px)
        rotateY(-16deg)
        rotateX(66deg)
        rotateZ(37deg)
	;

    &__front{
        width: 800px;
        height: 220px;
        transform: rotateY(0deg) translateZ(15px);
        background-color: $gray-1;
    }
    &__back{
        width: 800px;
        height: 220px;
        transform: rotateY(180deg) translateZ(15px);
        background-color: $gray-4;
        box-shadow:
            0px 25px 0 $purple-2,
            -40px 5px 0 $purple-2,
            -40px 25px 0 $purple-2
        ;
    }
    &__right{
        width: 30px;
        height: 220px;
        transform: rotateY(90deg) translateZ(785px);
        background-image: linear-gradient(to right, $gray-3 50%, $gray-4 50% );
    }
    &__left{
        width: 30px;
        height: 220px;
        transform: rotateY(-90deg) translateZ(15px);
        background-image: linear-gradient(to right, $gray-3 50%, $gray-4 50% );
    }
    &__top{
        width: 800px;
        height: 30px;
        transform: rotateX( 90deg) translateZ(15px);
        background-color: $gray-1;
    }
    &__bottom{
        width: 800px;
        height: 30px;
        transform: rotateX(-90deg) translateZ(205px);
        background-image: linear-gradient(to bottom, $gray-3 50%, $gray-4 50% );
    }
    /**/
    &__f-top{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-wrap: nowrap;
        width: 803px;
        height: 100px;
        margin-top: 10px;
        border-bottom: 20px solid $gray-2;

        transform: translateZ(5px) rotateX(-6deg) rotateZ(.9deg);
        background-color: $gray-1;
    }
        &__led{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            width: 110px;
            height: 42px;

            background-color: $blue-1;
            border-top: 10px solid $gray-4;
            border-left: 10px solid $gray-4;
            box-shadow:  inset 8px 8px 0 $blue-2;
        }
            &__line{
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                height: 25px;
                padding: 0 1px;
                transform: rotateZ(180deg);
                overflow: hidden;

                @for $i from 1 through 10 {
                    &:nth-of-type(#{$i}) {
                        animation: line 1s ease-in alternate infinite #{$i / 10 }s;
                    }

                }
            }
            &__dot{
                height: 6px;
                width: 6px;
                flex-shrink: 0;
                background-color: rgba($gray-4, .3);
            }
        &__buttons{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 60px;
            height: 80px;
            margin: 0 40px;
            padding: 5px 0;
        }
            &__button{
                height: 20px;
                width: 20px;
                margin: 0 3px;
                box-shadow: 4px 4px 0 $gray-4;
                background-color: $blue-1;

                &:nth-of-type(2){ animation: button-1 1s infinite; }
                &:nth-of-type(3){ animation: button-1 2s infinite reverse; }
                &:nth-of-type(5){animation: button-2 2s infinite; }
                &:nth-of-type(6){ animation: button-3 1.5s infinite;}
            }

        &__speaker{
            width: 70px;
            height: 70px;
            background-color: $gray-3;
            border-radius: 50%;
            margin-bottom: 5px;

            background-image: radial-gradient($gray-3 3px, transparent 3px);
            background-color: $gray-1;
            background-position: 0 0, 4px 4px;
            background-size: 10px 10px;
        }
    /**/
    &__f-bottom{
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: nowrap;
        width: 630px;
        height: 120px;
        margin: 0 auto;
        padding-top: 1px;
        background-color: $white-1;
    }
}

.key{
    position: relative;
    width: 30px;
    z-index: 1000;
    @for $i from 1 through 21 {
        &:nth-of-type(#{$i}) {
            animation: key-down-white .5s infinite alternate #{$i / 15 }s;
        }
    }

    &__front{
        width: 30px;
        height: 120px;
        transform: rotateY(0deg) translateZ(2px);
        background-color: $white-1;

        @for $i from 1 through 21 {
            &-#{$i} {
                animation: key-down-color .5s infinite alternate #{$i / 15 }s;
            }
        }
    }
    &__back{
        width: 30px;
        height: 120px;
        transform: rotateY(180deg) translateZ(2px);
        background-color: $white-2;
    }
    &__right{
        width: 4px;
        height: 120px;
        transform: rotateY(90deg) translateZ(28px);
        background-color: $white-2;
    }
    &__left{
        width: 4px;
        height: 120px;
        transform: rotateY(-90deg) translateZ(2px);
        background-color: $white-1;
    }
    &__top{
        width: 30px;
        height: 4px;
        transform: rotateX( 90deg) translateZ(2px);
        background-color: $white-2;
    }
    &__bottom{
        width: 30px;
        height: 4px;
        transform: rotateX(-90deg) translateZ(118px);
        background-color: $white-2;
        border-left: 1px solid $white-3;

    }
    &--black{
        position: absolute;
        transform: translateZ(8px);
        border-bottom: none;
        z-index: 2000;
        &-1{ left: 15px; }
        &-2{ left: 50px; }
        &-3{ left: 110px; }
        &-4{ left: 140px; }
        &-5{ left: 170px; }
        &-6{ left: 230px; }
        &-7{ left: 260px; }
        &-8{ left: 320px; }
        &-9{ left: 350px; }
        &-10{ left: 380px; }
        &-11{ left: 440px; }
        &-12{ left: 470px; }
        &-13{ left: 530px; }
        &-14{ left: 560px; }

        @for $i from 1 through 15 {
            &-#{$i} {
                animation: key-down-black .5s infinite alternate #{$i / 15 }s;
            }
        }

        .key__front{
            width: 20px;
            height: 70px;
            transform: rotateY(0deg) translateZ(3px);
            background-color: $gray-1;
            border-right: none;

        }
        .key__back{
            width: 20px;
            height: 70px;
            transform: rotateY(180deg) translateZ(3px);
            background-color: $gray-2;

            // box-shadow:
            //     0px 4px 0 $white-2,
            //     -4px 0px 0 $white-2,
            //     -4px 4px 0 $white-2
            // ;

        }
        .key__right{
            width: 6px;
            height: 70px;
            transform: rotateY(90deg) translateZ(16px);
            background-color: $gray-3;
            border-bottom: none;
        }
        .key__left{
            width: 6px;
            height: 70px;
            transform: rotateY(-90deg) translateZ(3px);
            background-color: $gray-1;
        }
        .key__top{
            width: 20px;
            height: 6px;
            transform: rotateX( 90deg) translateZ(3px);
            background-color: $gray-1;

        }
        .key__bottom{
            width: 20px;
            height: 6px;
            transform: rotateX(-90deg) translateZ(67px);
            background-color: $gray-3;
        }

    }
}

/**/

@keyframes key-down-color {
    0%{ background-color: lighten($blue-1, 15); }
    30%, 100%{ background-color: $white-1;}
}
@keyframes key-down-white {
    0%{
        transform: translateZ(0px) rotateX(-1deg);
        transform-origin: center;
    }
    30%, 100%{
        transform: translateZ(3px) rotateX(0deg);
        transform-origin: center;
    }
}
@keyframes key-down-black {
    0%{
        transform-origin: center;
        transform: translateZ(9px);
    }
    30%, 100%{
        transform: translateZ(8px);
        transform-origin: center;
    }
}
@keyframes line {
    0%, 100%{	height: 60%; }
    24%{ height: 80%; }
    25%, 30%{ height: 85%; }
    55%, 60%{ height: 65%; }
    61%, 65%{ height: 90%; }
    80%, 82%{ height: 50%; }
    83%, 90%{ height: 40%; }
    95%{ height: 40%; }
}
@keyframes button-1 {
    0%{ background-color: $blue-1; }
    50%, 100%{ background-color: $purple-1; }

}
@keyframes button-2 {
    0%, 40%{ background-color: $orange-1; }
    50%, 100%{ background-color: $blue-1; }

}
@keyframes button-3 {
    0%, 40%{ background-color: $green-1; }
    50%, 100%{ background-color: $blue-1; }
}

</style>
  