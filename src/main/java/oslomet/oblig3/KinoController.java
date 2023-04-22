package oslomet.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KinoController {

    @Autowired
KinoRepository rep;

    @PostMapping("/lagre")
public void lagre(Kino k){
rep.lagreBilett(k);
    }

    @GetMapping("/vis")
public List<Kino>vis(){
return rep.hentAlleBilet();
    }

    @GetMapping("/slett")
public void slett(){
rep.slettBilett();
    }


}
