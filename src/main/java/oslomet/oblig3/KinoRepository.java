package oslomet.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KinoRepository {
@Autowired
private JdbcTemplate db;

public void lagreBilett(Kino innBilett){
    String sql="INSERT INTO Kino (film,antall,navn,etternavn,telefonnr,epost) VALUES (?,?,?,?,?,?)";
    db.update(sql, innBilett.getFilm(),innBilett.getAntall(),innBilett.getNavn(),innBilett.getEtternavn(),innBilett.getTelefonnr(),innBilett.getEpost());
}

public List<Kino> hentAlleBilet(){
    String sql="SELECT * FROM Kino ORDER BY etternavn";
    List<Kino>alleBilett=db.query(sql, new BeanPropertyRowMapper<>(Kino.class));
    return alleBilett;
}

public void slettBilett(){
    String sql="DELETE FROM Kino";
    db.update(sql);
}
}
