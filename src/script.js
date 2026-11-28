import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import GUI from 'lil-gui'
import { or } from 'three/examples/jsm/nodes/Nodes.js'



let sc = new THREE.Scene()

let gui = new GUI(
    {title:'shoe controls'}
)

//rgbe
let rgbe = new RGBELoader()
rgbe.load('env/2k.hdr',(env)=>{
    env.mapping = THREE.EquirectangularReflectionMapping
    env.colorSpace = THREE.SRGBColorSpace
    sc.environment = env
})


//model


let model = null;
let gltf = new GLTFLoader()
let draco = new DRACOLoader()
draco.setDecoderPath('/draco/')
gltf.setDRACOLoader(draco)
gltf.load('models/glb/shoe.glb',(shoe)=>{
    sc.add(shoe.scene)
    model = shoe.scene
    let s = 0.5
    model.scale.set(s,s,s)
    model.position.y = -0.5
         model.children[0].material.color.set('#3ec74e')
        model.children[1].material.color.set('#3ec74e')
        model.children[2].material.color.set('#3ec74e')
        model.children[3].material.color.set('#3ec74e')
        model.children[4].material.color.set('#3ec74e')
        model.children[5].material.color.set('#3ec74e')
        model.children[6].material.color.set('#3ec74e')
        model.children[7].material.color.set('#3ec74e')
        model.children[8].material.color.set('#3ec74e')
        model.children[11].material.color.set('#3ec74e')
        model.children[15].material.color.set('#3ec74e')
        model.children[17].material.color.set('#3ec74e')
        model.children[18].material.color.set('#3ec74e')
        model.children[19].material.color.set('#3ec74e')
        model.children[20].material.color.set('black')
        model.children[21].material.color.set('#3ec74e')

    let btn1 = document.querySelector('.btn1')
    btn1.addEventListener('click',()=>{
        model.children[0].material.color.set('#211899')
        model.children[1].material.color.set('#342abd')
        model.children[2].material.color.set('#28227a')
        model.children[3].material.color.set('#372f99')
        model.children[4].material.color.set('#413a94')
        model.children[5].material.color.set('#413a94')
        model.children[6].material.color.set('#28227a')
        model.children[7].material.color.set('#413a94')
        model.children[8].material.color.set('#2d2869')
        model.children[11].material.color.set('#3f37b0')
        model.children[15].material.color.set('#2d2869')
        model.children[17].material.color.set('#aca8e3')
        model.children[18].material.color.set('#372f99')
        model.children[19].material.color.set('#413a94')
        model.children[20].material.color.set('black')
        model.children[21].material.color.set('#2c276e')
    })
    let btn2 = document.querySelector('.btn2')
    btn2.addEventListener('click',()=>{
        model.children[0].material.color.set('#e35656')
        model.children[1].material.color.set('#e35656')
        model.children[2].material.color.set('#e35656')
        model.children[3].material.color.set('#e35656')
        model.children[4].material.color.set('#e35656')
        model.children[5].material.color.set('#e35656')
        model.children[6].material.color.set('#e35656')
        model.children[7].material.color.set('#e35656')
        model.children[8].material.color.set('#e35656')
        model.children[11].material.color.set('#e35656')
        model.children[15].material.color.set('#e35656')
        model.children[17].material.color.set('#e35656')
        model.children[18].material.color.set('#e35656')
        model.children[19].material.color.set('#e35656')
        model.children[20].material.color.set('black')
        model.children[21].material.color.set('#e35656')
    })
    let btn3 = document.querySelector('.btn3')
    btn3.addEventListener('click',()=>{
        model.children[0].material.color.set('#3ec74e')
        model.children[1].material.color.set('#3ec74e')
        model.children[2].material.color.set('#3ec74e')
        model.children[3].material.color.set('#3ec74e')
        model.children[4].material.color.set('#3ec74e')
        model.children[5].material.color.set('#3ec74e')
        model.children[6].material.color.set('#3ec74e')
        model.children[7].material.color.set('#3ec74e')
        model.children[8].material.color.set('#3ec74e')
        model.children[11].material.color.set('#3ec74e')
        model.children[15].material.color.set('#3ec74e')
        model.children[17].material.color.set('#3ec74e')
        model.children[18].material.color.set('#3ec74e')
        model.children[19].material.color.set('#3ec74e')
        model.children[20].material.color.set('black')
        model.children[21].material.color.set('#3ec74e')
    })
    let btn4 = document.querySelector('.btn4')
    btn4.addEventListener('click',()=>{
        model.children[0].material.color.set('#727275')
        model.children[1].material.color.set('#727275')
        model.children[2].material.color.set('#727275')
        model.children[3].material.color.set('#727275')
        model.children[4].material.color.set('#727275')
        model.children[5].material.color.set('#727275')
        model.children[6].material.color.set('#727275')
        model.children[7].material.color.set('#727275')
        model.children[8].material.color.set('#727275')
        model.children[11].material.color.set('#727275')
        model.children[15].material.color.set('#727275')
        model.children[17].material.color.set('#727275')
        model.children[18].material.color.set('#727275')
        model.children[19].material.color.set('#727275')
        model.children[20].material.color.set('black')
        model.children[21].material.color.set('#727275')
    })

})

//lights

let aml = new THREE.AmbientLight('#ffffff',0.1)
sc.add(aml)

let direct = new THREE.DirectionalLight('#FFFFFF',0.1)
direct.position.set(1,1,1)
sc.add(direct)


let size = {
    width : window.innerWidth,
    height : window.innerHeight
}

window.addEventListener('resize',()=>{
    size.width = window.innerWidth
    size.height = window.innerHeight
    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()
    renderer.setSize(size.width,size.height)
})



let camera = new THREE.PerspectiveCamera(75,size.width/size.height)
camera.position.set(0,0.3,3)
sc.add(camera)



let canvas = document.querySelector('.web')
let renderer = new THREE.WebGLRenderer({
    canvas,
    antialias:true,
    alpha:true
})

renderer.setSize(size.width,size.height)
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 2


let orbit = new OrbitControls(camera,canvas)
orbit.enableDamping = true
orbit.minDistance = 2
orbit.maxDistance = 3.5

//gui controls
gui.close()
gui.add(renderer,'toneMapping',{
    no : THREE.NoToneMapping,
    linear : THREE.LinearToneMapping,
    reinhard : THREE.ReinhardToneMapping,
    ACES : THREE.ACESFilmicToneMapping,
    cineon : THREE.CineonToneMapping
})
gui.add(renderer,'toneMappingExposure',0,4,1).name('Exposure')
gui.add(aml,'intensity',0,1,0.1).name('aml light')
gui.add(direct,'intensity',0,1,0.1).name('directional light')



let clock = new THREE.Clock()

let animation = ()=>{
    
    let elaps = clock.getElapsedTime()

   


    orbit.update()
    renderer.render(sc,camera)
    window.requestAnimationFrame(animation)
}
animation()