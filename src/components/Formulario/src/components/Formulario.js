
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formState : {},
      nombreLengthMin : 3,
      nombreLengthMax : 15,
      edadMin : 18,
      edadMax : 120,
      usuarios:[],
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
      
    },
   enviar(){
      try {
        this.$store.dispatch('agregarUsuario', this.formData );
        this.formData = this.getInicialData()
      }
      catch (error){
        console.error(error)
      }
    }

  }
}


