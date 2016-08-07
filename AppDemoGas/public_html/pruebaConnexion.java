package AppDemoGas;

import java.io.IOException;
import java.util.Properties;

public class pruebaConnexion
{
    public String getProperties()
    {
        try
        {
//            String Dato="";
            Properties propiedad= new Properties();
            propiedad.load(getClass().getResourceAsStream("database.properties"));
            if (!propiedad.isEmpty()) 
            {
                return "correcto";
            }
            else
            {
                return "falla";
            }
        }
        catch(IOException ex)
        {
            return "falla";
        }
    }
}
